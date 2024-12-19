import axios from "axios";
import { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Insertscategorie = () => {
  const navigate = useNavigate();
  const [scategorie, setScategorie] = useState({});
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    try {
      const res = await axios.get("https://backend-ecommerce-one-bay.vercel.app/api/categorie");
      setCategories(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSave = async (e) => {
    try {
      e.preventDefault();
      await axios.post("https://backend-ecommerce-one-bay.vercel.app/api/scategorie", scategorie);
      navigate("/scategories");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
      <h1>Insérer une sous-catégorie</h1>
      <Form>
        <Form.Group>
          <Form.Label>Nom</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nom"
            value={scategorie.nomscategorie}
            onChange={(e) => setScategorie({ ...scategorie, nomscategorie: e.target.value })}
          />
        </Form.Group>
        
        <Form.Group>
          <Form.Label>Catégorie associée</Form.Label>
          <Form.Control
            as="select"
            value={scategorie.categorieID}
            onChange={(e) => setScategorie({ ...scategorie, categorieID: e.target.value })}
          >
            <option value="">--Sélectionnez une catégorie--</option>
            {categories.map((cat) => (
              <option key={cat._id} value={cat._id}>
                {cat.nomcategorie}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
      </Form>
      <button className="btn btn-success btn-sm" onClick={(e) => handleSave(e)}>
        Enregistrer
      </button>
      <Link to="/scategories">
        <button className="btn btn-danger btn-sm">Annuler</button>
      </Link>
    </div>
  );
};

export default Insertscategorie;
