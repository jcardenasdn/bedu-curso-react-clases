const Input = (props) => {
  return (
    <div>
      <label>{props.label}:</label>
      <input onChange={props.handleChange}/>
    </div>
  );
}

export default Input;