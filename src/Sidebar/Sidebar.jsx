import Category from "./Category/Category";
import Price from "./Price/Price";
import Colors from "./Colors/Colors";
import "./Sidebar.css"
import { BsCartFill } from "react-icons/bs";


function Sidebar(handleChange){
  
return (
  <>
  <section className="sidebar">
    <div className="logo-container">
        <h1><BsCartFill /></h1>
    </div>

    <Category handleChange = {handleChange}/>
    <Price handleChange = {handleChange}/>
    <Colors handleChange = {handleChange}/>

  </section>
  </>   
)
}

export default Sidebar;