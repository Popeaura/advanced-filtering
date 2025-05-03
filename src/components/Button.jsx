function Button({onClickHandler,value, title}) {
  return <button onClick={onClickHandler} value={value}></button>
}

export default Button;