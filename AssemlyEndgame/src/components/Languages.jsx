export default function Languages(props) {
  const styles = {
    backgroundColor: props.isDie ? 'gray' : props.bg,
    textDecoration: props.isDie ? 'line-through' : 'none',
  };

  return (
    <button style={styles}>
      <span>{props.name}</span>
    </button>
  );
}
