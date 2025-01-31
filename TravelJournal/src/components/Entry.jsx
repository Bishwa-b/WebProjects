export default function Entry(props) {
  return (
    <article>
      <div className="img-container">
        <img src={props.img.src} alt={props.img.alt} />
      </div>
      <div className="content-container">
        <div className="heading-container">
          <img src="src/assets/location-pin.png" alt="pin" />

          <span>{props.country}</span>
          <a href={props.googleMapsLink} target="_blank">
            View on Google Maps
          </a>
        </div>

        <h1>{props.title}</h1>

        <h2>{props.dates}</h2>

        <p>{props.text}</p>
      </div>
    </article>
  );
}
