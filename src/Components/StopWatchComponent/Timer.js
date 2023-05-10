export const Timer = (props) => {
  return (
    <div style={{ fontSize: "25px" }}>
      <span style={{ color: "blue", fontWeight: "bold" }}>
        {("0" + Math.floor((props.time / 60000) % 60)).slice(-2)}
      </span>
      <span>:</span>
      <span style={{ color: "blue", fontWeight: "bold" }}>
        {("0" + Math.floor((props.time / 1000) % 60)).slice(-2)}
      </span>
      <span>:</span>
      <span style={{ color: "red" }}>
        {("0" + ((props.time / 10) % 100)).slice(-2)}
      </span>
    </div>
  );
};
