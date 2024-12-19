import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";

const ListArticleCard = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    GetListArticles();
  }, []);

  const GetListArticles = async () => {
    try {
      const res = await axios.get("https://backend-ecommerce-one-bay.vercel.app/api/articles");
      setArticles(res.data);
    } catch (error) {
      console.error("Error fetching articles:", error);
    }
  };

  return (
    <div className="container" style={{ marginTop: "20px" }}>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center", 
          gap: "20px", 
        }}
      >
        {articles.map((art, ind) => (
          <Card key={ind} sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt={art.reference || "Article Image"}
              height="200"
              image={art.imageart || "https://via.placeholder.com/345x200"} //
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                {art.reference || "Article"}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Prix : {art.prixVente} DT
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                disabled={art.qtestock <= 0}
                variant="contained"
                color={art.qtestock > 0 ? "primary" : "error"}
                size="large"
                fullWidth
              >
                {art.qtestock <= 0 ? "OUT OF STOCK" : "Add to Cart"}
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ListArticleCard;
