export default function Keyboard(props) {
  const styles = {
    backgroundColor: props.isGuessed ? props.bg : '#FCBA29',
  };
  
  return (
    <button
      style={styles}
      onClick={() => props.toggle(props.id)}
      disabled={
        props.maxAttempt <= props.wrongGuess || props.isGuessed === true
      }
    >
      <span>{props.value}</span>
    </button>
  );
}
