import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ReactLoading from 'react-loading';
import { Link } from 'react-router-dom';

const Listarticle = () => {
  const [articles,setArticles]=useState([])
  const [isloading,setIsloading]=useState(true)
  const fetcharticles=async()=>{
    try{
      const res= await axios.get("https://backend-ecommerce-one-bay.vercel.app/api/article")
      setArticles(res.data)
      setIsloading(false)
      console.log(res.data)
    }
    catch(error){
        console.log(error)
      
      }

  }
  useEffect(()=>{
    fetcharticles()
  },[])
  if (isloading){
    return(
      <>
      <center>    <ReactLoading type="spin" color="red" height={300} width={200} /><h3>En cours de chargment..</h3>
      </center></>
    )
  }
const handleDelete=async(id)=>{
  window.confirm("Etes vous sure de vouloir supprimer")
  {
  try{
  await axios.delete(`https://backend-ecommerce-one-bay.vercel.app/api/article/${id}`)
  setArticles(articles.filter(article=>article._id!=id))
}catch(error){
  console.log(error)

}
}
}
  return (

    <div>
      <p>
      <td><Link to="/articles/add" ><button className='btn btn-success btn-sm'><i class="fa-solid fa-square-plus"></i> Nouveau</button></Link></td>
      </p>
    <center> <h1>Liste article</h1></center>
    <table className='table table-stripes'>
     <thead>
     <tr>
       <th>Reference</th>
       <th>Designation</th>
       <th>Marque</th>
       <th>Stock</th>
       <th>Prix</th>
       <th>Image</th>
       <th>Update</th>
       <th>Delete</th>
      </tr>
     </thead>
    <tbody>

      {
        articles.map((art,index)=>
          <tr>
            <td>{art.reference}</td>
            <td>{art.designation}</td>
            <td>{art.marque}</td>
            <td>{art.qtestock}</td>
            <td>{art.prix}</td>
            <td><img src={art.imageart} width={100} height={100}/></td>
            <td><button className='btn btn-arning btn-sm'><i class="fa-sharp fa-solid fa-pen-to-square"></i>Update</button></td>
            <td><button className='btn btn-danger btn-sm' onClick={()=>handleDelete(art._id)}><i class="fa-sharp fa-solid fa-trash"></i>Delete</button></td>
          </tr>
      )}
    </tbody>
    </table>
    </div>
  )
}

export default Listarticle
