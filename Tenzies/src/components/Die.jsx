export default function Die(props) {
  const styles = {
    backgroundColor: props.isHeld ? '#59e391' : 'white',
  };
  return (
    <button style={styles} onClick={() => props.handleClick(props.id)}>
      <span>{props.value}</span>
    </button>
  );
}
