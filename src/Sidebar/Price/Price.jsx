import "./Price.css"

function Price() {
  return (
    <div className="ml">
      <h2 className="sidebar-title price-title">Price

      <label className="sidebar-label-container">
          <input type="radio" name="test2" />
          <span className="checkmark"></span>All
      </label>

      <label className="sidebar-label-container">
          <input type="radio" name="test2" />
          <span className="checkmark"></span>$0 - %50
      </label>

      <label className="sidebar-label-container">
          <input type="radio" name="test2" />
          <span className="checkmark"></span>$50 - $100
      </label>

      <label className="sidebar-label-container">
          <input type="radio" name="test2" />
          <span className="checkmark"></span>$100 - $150
      </label>

      <label className="sidebar-label-container">
          <input type="radio" name="test2" />
          <span className="checkmark"></span>Over $150 
      </label>
      </h2>
    </div>
  )
}


export default Price;
