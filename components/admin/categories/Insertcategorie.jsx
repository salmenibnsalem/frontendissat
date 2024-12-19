import axios from "axios";
import { useState } from "react";
import { Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Insertcategorie = () => {
  const navigate = useNavigate();
  const [categorie, setCategorie] = useState({});

  const handleSave = async (e) => {
    try {
      e.preventDefault();
      await axios.post("https://backend-ecommerce-one-bay.vercel.app/api/categorie", categorie);
      navigate("/categories");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
      <h1>Insérer une catégorie</h1>
      <Form>
        <Form.Group>
          <Form.Label>Nom</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nom"
            value={categorie.nomcategorie}
            onChange={(e) => setCategorie({ ...categorie, nomcategorie: e.target.value })}
          />
        </Form.Group>
      </Form>
      <button className="btn btn-success btn-sm" onClick={(e) => handleSave(e)}>
        Enregistrer
      </button>
      <Link to="/categories">
        <button className="btn btn-danger btn-sm">Annuler</button>
      </Link>
    </div>
  );
};

export default Insertcategorie;
