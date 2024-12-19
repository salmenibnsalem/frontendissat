import axios from 'axios'
import React, { useState } from 'react'

const Listarticle = () => {
  const [articles,setArticles]=useState([])
  const fetcharticles=async()=>{
    try{
      const res= await axios.get("http://localhost:3001/api/article")
      console.log(res)
    }
    catch(error){
        console.log(error)
      
      }

  }
  return (
    <div>
     <h1>Liste article</h1>
     <button onClick={()=>fetcharticles()}>Affiche</button>

    </div>
  )
}

export default Listarticle
