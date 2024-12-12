import React, { useState } from 'react'
import Banner from '../components/Banner'

const Home = () => {
  const [query,setquery]=useState("");
    const handleInputChange = (event) =>{
        setquery(event.target.value);
        console.log(event.target.value);
    }
  return (
    <div>
      <Banner query={query} handleInputChange={handleInputChange}/>
    </div>
  )
}

export default Home