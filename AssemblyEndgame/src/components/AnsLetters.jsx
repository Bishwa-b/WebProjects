export default function AnsLetters(props) {
  const letterOpacity =
    props.wrongGuess === props.maxAttempt ? 1 : props.Guessed ? 1 : 0;

  const letterColor =
    props.wrongGuess === props.maxAttempt && !props.Guessed
      ? '#EC5D49'
      : '#F9F4DA';

  const stylesLetter = {
    opacity: letterOpacity,
  };
  const styleDiv = {
    backgroundColor: props.Guessed ? 'transparent' : '#323232',
    color: letterColor,
  };

  return (
    <div className="eachLetter" style={styleDiv}>
      <h1 style={stylesLetter}>{props.value}</h1>
    </div>
  );
}
