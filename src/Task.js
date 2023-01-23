export const Task = (props) => {
  return (
    <div
      className="task"
      style={{
        color: props.completed ? "green" : "black",
        backgroundColor: "whitesmoke",
      }}
    >
      <h1>{props.taskName}</h1>
      <button onClick={() => props.completetask(props.id)}>Complete</button>
      <button onClick={() => props.deletetask(props.id)}>Remove</button>
    </div>
  );
};
