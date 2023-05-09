import {
  Spinner,
  Image,
  Stack,
  Alert,
  Container,
  AlertIcon,
  AlertDescription,
  AlertTitle,
} from "@chakra-ui/react";
import ProductCard from "../components/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import {
  getProducts,
  getElectronics,
  getMen,
  getHomeAppliances,
  getHotSale,
  Search,
} from "../redux/actions/productActions";
import { Link } from "react-router-dom";
import HomeSlide from "../components/HomeSlider";
import { useEffect } from "react";

const ProductsScreen = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.products);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const setName = (e) => {
    dispatch(Search(e));
  };

  const SearchElectronics = () => {
    dispatch(getElectronics());
  };

  const SearchAll = () => {
    dispatch(getProducts());
  };

  const SearchMen = () => {
    dispatch(getMen());
  };

  const SearchHomeAppliances = () => {
    dispatch(getHomeAppliances());
  };
  const SearchHotSale = () => {
    dispatch(getHotSale());
  };

  return (
    <div className="product-main">
      <div className="first-sec">
        <div className="circle"></div>
        <div className="content">
          <div className="text-box">
            <h2>That's What</h2>
            <h2>
              <span>i like</span>
            </h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
              id non ut, quod eaque sed amet placeat inventore odit eius hic
              alias saepe omnis dignissimos harum nobis laudantium debitis
              libero.
            </p>
          </div>
          <div className="img-box">
            <img src="images/13pm.png" className="pepsi" alt="coverimage"></img>
          </div>
        </div>

        <ul className="sci">
          <li>
            <Link to="/">
              <img src="images/facebook.png" alt="facebook icon"></img>
            </Link>
          </li>
          <li>
            <Link to="/">
              <img src="images/twitter.png" alt="twitter-icon"></img>
            </Link>
          </li>
          <li>
            <Link to="/">
              <img src="images/insta.png" alt="instagram-icon"></img>
            </Link>
          </li>
        </ul>
      </div>

      <Container className="home-wrapper-1">
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
                  <p>$999.00</p>
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
                  <p>$999.00</p>
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
                  <p>$999.00</p>
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
                  <p>$999.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <div className="sort-products" id="products-sort">
        <div className="sort-container">
          <button type="button" className="sort badge" onClick={SearchMen}>
            IPhones
          </button>
          <button
            type="button"
            className="sort badge"
            onClick={SearchElectronics}
          >
            Mac Books
          </button>
          <button
            type="button"
            className="sort badge"
            onClick={SearchHomeAppliances}
          >
            Apple Accessories
          </button>
          <button type="button" className="sort badge" onClick={SearchHotSale}>
            Flash Sale
          </button>
          <button type="button" className="sort badge" onClick={SearchAll}>
            All{" "}
          </button>
        </div>
        <div className="sort-search sticky-top">
          <div class="d-flex justify-content-center search-cont">
            <div class="search">
              <input
                type="text"
                class="search-input"
                placeholder="Search..."
                name=""
                onChange={(e) => setName(e.target.value)}
              />{" "}
              <div class="search-icon">
                {" "}
                <i class="fa fa-search"></i>{" "}
              </div>{" "}
            </div>
          </div>
        </div>
        <button type="button" className="back-totop badge">
          <a href="#products-sort" className="bg-primary sort">
            {" "}
            Top
          </a>
        </button>
        <ul className="product-flex gap-small">
          {loading ? (
            <Stack direction="row" spacing={4}>
              <Spinner
                mt={20}
                thickness="2px"
                speed="0.65s"
                emptyColor="gray.200"
                color="orange.500"
                size="xl"
              />
            </Stack>
          ) : error ? (
            <Alert status="error">
              <AlertIcon />
              <AlertTitle>We are sorry!</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          ) : products.length > 0 ? (
            products.map((product) => (
              <li key={product._id}>
                <ProductCard product={product} />
              </li>
            ))
          ) : (
            <Image p={4} src={"images/empty-cart.jpg"} roundedTop="lg" />
          )}
        </ul>
      </div>
    </div>
  );
};

export default ProductsScreen;
