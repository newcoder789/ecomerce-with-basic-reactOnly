import { useState } from 'react'  
import Navigation from './Navigation/Navigation'
import Product from './Product/product'
import Recommended from './Recommended/Recommended'
import "./index.css";
import Sidebar from './Sidebar/Sidebar'


// import database 
import products from "../db/data.jsx";
import Card from './components/Card'


function App() {
  const [selectedCategory, setSelectedCategory] = useState(null)
  // ------------Input Filter-------------
  const [query, setQuery] = useState("");

  const handleInputChange  = event =>{
    setQuery(event.target.value);
  }

  
  const filteredItems = products.filter((products)=>{
    products.title.toLowerCase().indexOf(query.toLocaleLowerCase()!== -1)
  })
  // ------------Radio Filter-------------
  const handleChange = event=>{
    setSelectedCategory(event.target.value)
  }

  // ------------Buttons Filter-------------
  const handleClick = event=>{
    setSelectedCategory(event.target.value)
  }

  function filterData(products, selected, query){
    let filteredProducts = products;
    // FIltered input items
    if(query){
      filteredProducts = filteredItems;
    }
    if(selected){
      filteredProducts = filteredProducts.filter(({category, color, company, newPrice, title })=>category===selected|| color===selected|| company===selected || newPrice===selected|| title===selected);
    }
    return filteredProducts.map(({img,title,star,reviews,prevPrice,newPrice}, index)=>(
    <Card 
    key={index}
    img={img}
    title={title}
    star={star}
    reviews={reviews}
    newPrice={newPrice}
    prevPrice={prevPrice}
    />))
  }
  const result = filterData(products, selectedCategory, query)
  return (
    <>
      <div className='big-daddy'>
      <Sidebar handleChange={handleChange} />
      <Navigation query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Product result={result} />
      </div>
    </>
  )
}

export default App
