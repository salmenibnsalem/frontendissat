import Carousel from 'react-bootstrap/Carousel';

function Home() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://nastechgroup.com/wp-content/uploads/2023/07/ecommerce-website-development-saudi-arabia-bahrain.webp"          
         
          alt="First slide"

        />
        <Carousel.Caption>
        <h5>ESSAT Online Store</h5>
          <p>
          Welcome to Essat Online Store – Your one-stop shop for everything you love!
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://sellbery.com/wp-content/uploads/2024/07/silver-shopping-cart-on-pink-surface.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
        <h5>ESSAT Online Store</h5>
          <p>
          Welcome to Essat Online Store – Your one-stop shop for everything you love!
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://wallpapercave.com/wp/wp3537554.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>ESSAT Online Store</h5>
          <p>
          Welcome to Essat Online Store – Your one-stop shop for everything you love!
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Home;