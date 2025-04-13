import Sidebar from "./Sidebar/Sidebar";

import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import { useState } from "react";

//-------Database-------
import products from './db/data'
import Category from "./Sidebar/Category/Category";

function App() {
  const [selectedCategory, setselectedCategory] = useState(null)

//------input filter------
  const [query, setQuery] = useState("")

  const handleInputChange = event => {
    setQuery(event.target.value)
  }

  const filteredItems = products.filter(product => product.title.
    toLowerCase().indexOf(query.toLowerCase()!== -1)
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
      filtereProducts = filtereProducts.filter({ category,color,company})
    }

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
