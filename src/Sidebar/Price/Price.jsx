import Input from "../../components/Input";
import "./Price.css"

function Price(handleChange) {
  return (
    <div className="ml">
      <h2 className="sidebar-title price-title">Price</h2>
      <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test2" />
          <span className="checkmark"></span>All
        </label>
    </div>
  )
}


export default Price;
