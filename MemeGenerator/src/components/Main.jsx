import { useState, useEffect } from 'react';
export default function Main() {
  const [meme, setMeme] = useState({
    topText: 'Video',
    bottomText: 'Vedio!',
    memeImg: 'https://i.imgflip.com/30b1gx.jpg',
  });

  const [allMemes, setAllMemes] = useState([]);

  function handleClick(event) {
    const { name, value } = event.currentTarget;
    setMeme((prev) => {
      return { ...prev, [name]: value };
    });
  }

  function getImage() {
    setMeme((prev) => {
      return {
        ...prev,
        memeImg: allMemes[Math.floor(Math.random() * allMemes.length)].url,
      };
    });
  }
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    fetch('https://api.imgflip.com/get_memes', { signal })
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <main>
      <div className="form">
        <label>
          Top Text
          <input
            type="text"
            placeholder={meme.topText}
            value={meme.topText}
            name="topText"
            onChange={handleClick}
          />
        </label>

        <label>
          Bottom Text
          <input
            type="text"
            placeholder={meme.bottomText}
            value={meme.bottomText}
            name="bottomText"
            onChange={handleClick}
          />
        </label>
        <button onClick={getImage}>Get a new meme image 🖼</button>
      </div>
      <div className="meme">
        <img src={meme.memeImg} />
        <span className="top">{meme.topText}</span>
        <span className="bottom">{meme.bottomText}</span>
      </div>
    </main>
  );
}
