export default function AnsLetters(props) {
  const stylesLetter = {
    opacity: props.Guessed ? 1 : 0,
  };
  const styleDiv = {
    backgroundColor: props.Guessed ? 'none' : '#323232',
  };
  return (
    <div className="eachLetter" style={styleDiv}>
      <h1 style={stylesLetter}>{props.value}</h1>
    </div>
  );
}
