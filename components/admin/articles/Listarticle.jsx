import axios from 'axios';
import ReactLoading from 'react-loading';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Listarticle = () => {
  const [articles, setArticles] = useState([]);
  const [isloading, setIsLoading] = useState(true);

  const fetchArticles = async () => {
    try {
      const res = await axios.get("https://backend-ecommerce-one-bay.vercel.app/api/article");
      setArticles(res.data);
      setIsLoading(false);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

 
  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://backend-ecommerce-one-bay.vercel.app/api/article/${id}`)
      setArticles(articles.filter((article) => article._id !== id));
    } catch (error) {
      console.log("Error deleting article:", error);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  if (isloading) {
    return (
      <center>
        <ReactLoading type={"cylon"} color="red" height={300} width={200} />
        <h5>En cours de chargement</h5>
      </center>
    );
  }

  return (
    <div>
      <center><h1>Liste des articles</h1></center>
      <p>
        <Link to="/articles/add">
          <button className="btn btn-success btn-sm">
            <i className="fa-solid fa-square-plus"></i> Ajouter
          </button>
        </Link>
      </p>
      <table className="table table-stripes">
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
          {articles.map((art, index) => (
            <tr key={art._id}>
              <td>{art.reference}</td>
              <td>{art.designation}</td>
              <td>{art.marque}</td>
              <td>{art.qtestock}</td>
              <td>{art.prix}</td>
              <td><img src={art.imageart} width={100} height={100} alt="Article" /></td>
              <td>
                <Link to={`/articles/edit/${art._id}`}>
                  <button className="btn btn-warning btn-sm">
                    <i className="fa-solid fa-pen-to-square"></i> Update
                  </button>
                </Link>
              </td>
              <td>
                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(art._id)}>
                  <i className="fa-solid fa-trash"></i> Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Listarticle
