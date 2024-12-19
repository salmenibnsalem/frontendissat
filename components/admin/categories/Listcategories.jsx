import axios from "axios";
import ReactLoading from "react-loading";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Listcategories = () => {
  const [categories, setCategories] = useState([]);
  const [isloading, setIsLoading] = useState(true);

  const fetchCategories = async () => {
    try {
      const res = await axios.get("https://backend-ecommerce-one-bay.vercel.app/api/categorie");
      setCategories(res.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://backend-ecommerce-one-bay.vercel.app/api/categorie/${id}`);
      setCategories(categories.filter((cat) => cat._id !== id));
    } catch (error) {
      console.log("Error deleting category:", error);
    }
  };

  useEffect(() => {
    fetchCategories();
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
      <center><h1>Liste des catégories</h1></center>
      <p>
        <Link to="/categories/add">
          <button className="btn btn-success btn-sm">
            Ajouter
          </button>
        </Link>
      </p>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Modifier</th>
            <th>Supprimer</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((cat) => (
            <tr key={cat._id}>
              <td>{cat.nomcategorie}</td>
              <td>
                <Link to={`/categories/edit/${cat._id}`}>
                  <button className="btn btn-warning btn-sm">Modifier</button>
                </Link>
              </td>
              <td>
                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(cat._id)}>
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Listcategories;
