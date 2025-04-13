import Sidebar from "./Sidebar/Sidebar";

import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import { useState } from "react";

function App() {
  const [selectedCategory, selectedCategory] = useState(null)


  return (
    <>
      <Sidebar/>
      <Navigation/>
      <Recommended/>
      <Products/>
    </>)
}

export default App  ;
