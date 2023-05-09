import React from "react";
//import { Link } from "react-router-dom";
import HomeSlide from "../components/HomeSlider";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
//import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";
import Container from "../components/Container";
import { services, flashsale } from "../utils/Data";
import '../index.css'

const Home = () => {
  return (
    <>
      <Container className="home-wrapper-1 py-5">
        <div className="home-row row">
          
          <div className="slider-col col-6">
           <HomeSlide />
          </div>
          <div className="col-6">
            <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
              <div className="small-banner position-relative">
                <img
                  src="images/catbanner-01.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>Best Sake</h4>
                  <h5>iPad Pro.</h5>
                  <p>
                     $999.00 
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img
                  src="images/catbanner-02.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>NEW ARRIVAL</h4>
                  <h5>IPad Air</h5>
                  <p>
                    $999.00
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative ">
                <img
                  src="images/catbanner-03.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>NEW ARRIVAL</h4>
                  <h5>IPad Air</h5>
                  <p>
                    $999.00
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative ">
                <img
                  src="images/catbanner-04.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>NEW ARRIVAL</h4>
                  <h5>IPad Air</h5>
                  <p>
                    $999.00
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      
      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <Marquee className="d-block d-flex">
              {services?.map((i, j) => {
                return (
                  <div className="d-flex align-items-center gap-15" key={j}>
                    <img src={i.image} alt="services" />
                    <div>
                      <h6>{i.title}</h6>
                      <p className="mb-0">{i.tagline}</p>
                    </div>
                  </div>
                );
              })}
            </Marquee>
          </div>
        </div>
      </Container>
      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="categories gap-9 d-flex justify-content-between flex-wrap align-items-center">
              <div className="category-card d-flex gap align-items-center">
                <div>
                  <h6>Women</h6>
                  <p>from GHC 25</p>
                </div>
                <img src="images/camera.jpg" alt="camera" />
              </div>
              <div className="category-card d-flex gap align-items-center">
                <div>
                  <h6>Men</h6>
                  <p>Up to 20% off</p>
                </div>
                <img src="images/camera.jpg" alt="camera" />
              </div>
              <div className="category-card d-flex gap align-items-center">
                <div>
                  <h6>Electronics</h6>
                  <p>1 year warranty</p>
                </div>
                <img src="images/tv.jpg" alt="camera" />
              </div>
              <div className="category-card d-flex gap align-items-center">
                <div>
                  <h6>Smart Phones</h6>
                  <p>up to 10% off</p>
                </div>
                <img src="images/headphone.jpg" alt="camera" />
              </div>
              <div className="category-card d-flex gap align-items-center">
                <div>
                  <h6>Home Appliances</h6>
                  <p>Up to 15% off</p>
                </div>
                <img src="images/homeapp.jpg" alt="camera" />
              </div>
              <div className="category-card d-flex gap align-items-center">
                <div>
                  <h6>Kids</h6>
                  <p>Up to 50% off</p>
                </div>
                <img src="images/headphone.jpg" alt="camera" />
              </div>
              <div className="category-card d-flex gap align-items-center">
                <div>
                  <h6>Shoes</h6>
                  <p>Up to 13% off</p>
                </div>
                <img src="images/tv.jpg" alt="camera" />
              </div>
              <div className="category-card d-flex gap align-items-center">
                <div>
                  <h6>HotSale</h6>
                  <p>Up to 40% off</p>
                </div>
                <img src="images/headphone.jpg" alt="camera" />
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="featured-wrapper home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Featured Collection</h3>
          </div>
          {/* <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard /> */}
        </div>
      </Container>

      <Container class1="famous-wrapper home-wrapper-2">
        <div className=" featured-flex row">
          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                src="images/famous-1.webp"
                className="img-fluid"
                alt="famous"
              />
              <div className="famous-content position-absolute">
                <h5>Watch</h5>
                <h6>Apple Series 7</h6>
                <p>For $399</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                src="images/famous-2.webp"
                className="img-fluid"
                alt="famous"
              />
              <div className="famous-content position-absolute">
                <h5 className="text-dark">Studio Display</h5>
                <h6 className="text-dark">600 nits</h6>
                <p className="text-dark">27-inch 5K Retina</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                src="images/famous-3.webp"
                className="img-fluid"
                alt="famous"
              />
              <div className="famous-content position-absolute">
                <h5 className="text-dark">Iphones</h5>
                <h6 className="text-dark">Iphone 13 Pro.</h6>
                <p className="text-dark">
                  For $999.00 
                </p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                src="images/famous-3.webp"
                className="img-fluid"
                alt="famous"
              />
              <div className="famous-content position-absolute">
                <h5 className="text-dark">speakers</h5>
                <h6 className="text-dark">Heavy sound.</h6>
                <p className="text-dark">
                  For $699
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="special-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Flash Sale</h3>
          </div>
        </div>
        <div className="row">
        {flashsale?.map((i, j) => {
                return (
                  <div className="Hotsale" key={j}>
                   <SpecialProduct data={i}/>
                  </div>
                );
              })}
        </div>
      </Container>
      {/* <Container class1="popular-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Popular Products</h3>
          </div>
        </div>
        <div className="row">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container> */}
      <Container class1="marque-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="marquee-inner-wrapper card-wrapper">
              <Marquee className="d-flex">
                <div className="mx-4 w-25">
                  <img src="images/brand-01.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-02.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-03.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-04.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-05.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-06.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-07.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-08.png" alt="brand" />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="blog-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Latest Blogs</h3>
          </div>
        </div>
        <div className="featured-flex row">
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;