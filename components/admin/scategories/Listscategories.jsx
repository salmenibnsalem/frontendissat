import axios from "axios";
import ReactLoading from "react-loading";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Listscategories = () => {
  const [scategories, setScategories] = useState([]);
  const [isloading, setIsLoading] = useState(true);

  const fetchScategories = async () => {
    try {
      const res = await axios.get("https://backend-ecommerce-one-bay.vercel.app/api/scategorie");
      setScategories(res.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://backend-ecommerce-one-bay.vercel.app/api/scategorie/${id}`);
      setScategories(scategories.filter((scategorie) => scategorie._id !== id));
    } catch (error) {
      console.log("Error deleting subcategory:", error);
    }
  };

  useEffect(() => {
    fetchScategories();
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
      <center><h1>Liste des sous-catégories</h1></center>
      <p>
        <Link to="/scategories/add">
          <button className="btn btn-success btn-sm">
            Ajouter
          </button>
        </Link>
      </p>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Catégorie associée</th>
            <th>Modifier</th>
            <th>Supprimer</th>
          </tr>
        </thead>
        <tbody>
          {scategories.map((scat) => (
            <tr key={scat._id}>
              <td>{scat.nomscategorie}</td>
              <td>{scat.categorieID?.nomcategorie || "Non spécifiée"}</td>
              <td>
                <Link to={`/scategories/edit/${scat._id}`}>
                  <button className="btn btn-warning btn-sm">Modifier</button>
                </Link>
              </td>
              <td>
                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(scat._id)}>
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

export default Listscategories;
