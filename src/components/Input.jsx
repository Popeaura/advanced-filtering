 function Input(handleChange, value, title, name ,color) {
  return (

    <label className="sidebar-label-container">
    <input onChange={handleChange} type="radio" value={value} name={name} />
    <span className="checkmark" style={{backgrounColor:color}}></span>All
    </label>

  );
}

export default Input;