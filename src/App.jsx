import Sidebar from "./Sidebar/Sidebar";
import Card from "./components/Card";
import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import { useState } from "react";

//-------Database-------
import products from './db/data'
import Category from "./Sidebar/Category/Category";

function App() {
  const [selectedCategory, setselectedCategory] = useState(null)
  const [query, setQuery] = useState("")



//------input filter------
  const handleInputChange = event => {
    setQuery(event.target.value)
  }

  const filteredItems = products.filter(product =>
     product.title.toLowerCase().indexOf(query.toLowerCase())!== -1
  );


  //------Radio filter------
  const handleChange = event => {
    setselectedCategory(event.target.value)
  }

  //------Buttons filter ----
  const handleClick = event =>{
    setselectedCategory(event.target.value)
  }


  function filterData(products,selected,query){
    let filtereProducts = products

    //filtering input items
    if (query){
      filtereProducts = filteredItems
    }

    //selected filter
    if (selected){
      filtereProducts = filtereProducts.filter(
        ({ category,color,company,newPrice, title}) =>
         category === selected || 
         color === selected|| 
         company  === selected ||
         newPrice === selected||
         title === selected);
    }

    return filtereProducts.map(({img,title,star,reviews,newPrice,prevPrice}) =>(
    <card
      key = {Math.random()}
      img = {img}
      title = {title}
      star = {star}
      reviews = {reviews}
      newPrice = {newPrice}
      prevPrice = {prevPrice}
    />    
    ))
  }
  return (
    <>
      <Sidebar/>
      <Navigation/>
      <Recommended/>
      <Products/>
    </>)
}

export default App  ;
