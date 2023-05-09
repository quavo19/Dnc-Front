import Carousel from "react-bootstrap/Carousel";

function HomeSlide() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/main-banner-1.jpg"
          alt="First slide"
        />
        <div className="main-banner-content position-absolute">
          <h4>SUPERCHARGED FOR PROS.</h4>
          <h5>iPad S13+ Pro.</h5>
          <p>For $999.00</p>
          <a href="#products-sort " className="home-buy">
            BUY NOW
          </a>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/main-banner-1.jpg"
          alt="Second slide"
        />

        <div className="main-banner-content position-absolute">
          <h4>SUPERCHARGED FOR PROS.</h4>
          <h5>iPad S13+ Pro.</h5>
          <p>For $999.00</p>
          <a href="#products-sort " className="home-buy">
            BUY NOW
          </a>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/main-banner.jpg"
          alt="Third slide"
        />

        <div className="main-banner-content position-absolute">
          <h4>SUPERCHARGED FOR PROS.</h4>
          <h5>iPad S13+ Pro.</h5>
          <p>for $999.00</p>
          <a href="#products-sort " className="home-buy">
            BUY NOW
          </a>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeSlide;
