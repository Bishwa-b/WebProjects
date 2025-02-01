export default function contact(props) {
  return (
    <article className="contact-card">
      <img src={props.img} alt="Photo of" />
      <h3>{props.name}</h3>
      <div className="info-group">
        <img src="src/assets/call.png" alt="phone icon" />
        <p>{props.contact}</p>
      </div>
      <div className="info-group">
        <img src="src/assets/email.png" alt="mail icon" />
        <p>{props.email}</p>
      </div>
    </article>
  );
}
