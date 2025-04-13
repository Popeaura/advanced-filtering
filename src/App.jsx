import Sidebar from "./Sidebar/Sidebar";

import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import { useState } from "react";

//Database
import products from './db/data'

function App() {
  const [selectedCategory, setselectedCategory] = useState(null)

//input filter
  const [query, setQuery] = useState("")

  const handleInputChange = event => {
    setQuery(event.target.value)
  }

  const filteredItems = products.filter(product => product.title)

  return (
    <>
      <Sidebar/>
      <Navigation/>
      <Recommended/>
      <Products/>
    </>)
}

export default App  ;
