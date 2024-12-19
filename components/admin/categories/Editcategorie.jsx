import axios from "axios";
import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";

const Editcategorie = () => {
  const navigate = useNavigate();
  const [categorie, setCategorie] = useState({});
  const { id } = useParams();

  const fetchCategorie = async () => {
    try {
      const res = await axios.get(`https://backend-ecommerce-one-bay.vercel.app/api/categorie/${id}`);
      setCategorie(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSave = async (e) => {
    try {
      e.preventDefault();
      await axios.put(`https://backend-ecommerce-one-bay.vercel.app/api/categorie/${id}`, categorie);
      navigate("/categories");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCategorie();
  }, []);

  return (
    <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
      <h1>Modifier une catégorie</h1>
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

export default Editcategorie;
