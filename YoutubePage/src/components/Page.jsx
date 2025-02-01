export default function Page(props) {
  return (
    <>
      <content>
        <a href={props.link}>
          <div className="video-container">
            <div className="video-thumbnail">
              <img src={props.img.src} alt={props.img.slt} />
            </div>
            <span>{props.title}</span>
            <div className="view-details">
              <p>{props.views}</p>
              <p>•</p>
              <p>{props.date}</p>
            </div>
          </div>
        </a>
      </content>
    </>
  );
}
