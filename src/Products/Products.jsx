import Card from "../components/Card";
import "./Products.css";

 function products({result}) {
  return (
  <>
  <section className="card-container">{result}</section>
  </>
  )
}


export default products;