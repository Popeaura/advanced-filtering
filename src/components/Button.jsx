function Button({onClickHandler,value, title}) {
  return <button onClick={onClickHandler} value={value} className="btns"></button>
}

export default Button;