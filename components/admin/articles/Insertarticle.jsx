import axios from "axios"
import { useEffect, useState } from "react"
import { Form,Col,Row } from "react-bootstrap"
import { Link,useNavigate } from "react-router-dom"


const Insertarticle = () => {
  const navigate=useNavigate()
  const [article,setArticles]=useState({})
  const[scategories,setScategories]=useState([])

const getscategories=async()=>{

    try{
      const res=await axios.get("http://localhost:3001/api/scategorie")
      setScategories(res.data)
    }
    catch(error){
      console.log(error)
    }
 }
 useEffect(()=>{
  getscategories()
 },[])

 const handleSave=async(e)=>{
    try{
      e.preventDefault()
      await axios.post("http://localhost:3001/api/article",article)
      .then(res=>{
        navigate("/articles")

      })
    }catch(error){
      console.log(error)
    }
 }
  return (
    <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
      <h1>Inserer un article</h1>
      <Form>
        <Row>
      <Form.Group as={Col} md='6' >
        <Form.Label>Reference</Form.Label>
        <Form.Control type="text" 
        placeholder="Reference" 
        value={article.reference} onChange={(e)=> setArticles({...article,reference:e.target.value})} />
      </Form.Group>

      <Form.Group as={Col} md='6'>
        <Form.Label>Reference</Form.Label>
        <Form.Control type="text" 
        placeholder="Designation" 
        value={article.designation} onChange={(e)=> setArticles({...article,designation:e.target.value})} />
      </Form.Group>
      </Row>

      <Row>
      <Form.Group as={Col} md='6' >
        <Form.Label>Marque</Form.Label>
        <Form.Control type="text" 
        placeholder="Marque" 
        value={article.marque} onChange={(e)=> setArticles({...article,marque:e.target.value})} />
      </Form.Group>

      <Form.Group as={Col} md='6'>
        <Form.Label>Prix</Form.Label>
        <Form.Control type="text" 
        placeholder="Prix" 
        value={article.prix} onChange={(e)=> setArticles({...article,prix:e.target.value})} />
      </Form.Group>
      </Row>

      <Row>
      <Form.Group as={Col} md='6' >
        <Form.Label>Stock</Form.Label>
        <Form.Control type="text" 
        placeholder="Stock" 
        value={article.qtestock} onChange={(e)=> setArticles({...article,qtestock:e.target.value})} />
      </Form.Group>

      <Form.Group as={Col} md='6'>
        <Form.Label>Image</Form.Label>
        <Form.Control type="text" 
        placeholder="Image" 
        value={article.imageart} onChange={(e)=> setArticles({...article,imageart:e.target.value})} />
      </Form.Group>
      </Row>
      <Row>
      <Form.Group as={Col} md='12'>
        <Form.Label>Scategorie</Form.Label>
        <Form.Control type="text" 
        as={"select"}
        placeholder="S/categorie" 
        value={article.scategorieID} onChange={(e)=> setArticles({...article,scategorieID:e.target.value})} >
        <option>----Selectionner une sous categories----</option>
        {
          scategories.map((scat,index)=>
          <option value={scat._id} key={index}>{scat.nomscategorie}</option>
          )
        }
        </Form.Control>
      </Form.Group>
      </Row>
    </Form>
    <button className="btn btn-success btn-sm" onClick={(e)=>handleSave(e)}>Enregistre</button>
    <Link to="/articles"><button className="btn btn-danger btn-sm">Delete</button></Link>
    </div>
  )
}

export default Insertarticle
