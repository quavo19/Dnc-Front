import axios from "axios";

import {
  setProducts,
  setAllitems,
  setElectronics,
  setLoading,
  setError,
  setProduct,
  productReviewed,
  resetError,
} from "../slices/products";
export const Search = (value) => async (dispatch) => {
  try {
    const { data } = await axios.get("/api/products");
    const words = value.trim().toLowerCase().split(/\s+/);
    const pattern = `^(?=.*${words.join(")(?=.*")}).*$`;
    const regex = new RegExp(pattern, "i");
    const Allitems = data.filter((element) => regex.test(element.name.trim()));

    dispatch(setAllitems(Allitems));
  } catch (error) {
    dispatch(
      setError(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
          ? error.message
          : "An unexpected error has occured. Please try again later."
      )
    );
  }
};

export const getProducts = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const { data } = await axios.get("/api/products");

    dispatch(setProducts(data));
  } catch (error) {
    dispatch(
      setError(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
          ? error.message
          : "An unexpected error has occured. Please try again later."
      )
    );
  }
};

export const getElectronics = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const { data } = await axios.get("/api/products");
    const Electronics = data.filter((element) => {
      return element.name === "mac book";
    });

    dispatch(setElectronics(Electronics));
  } catch (error) {
    dispatch(
      setError(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
          ? error.message
          : "An unexpected error has occured. Please try again later."
      )
    );
  }
};

export const getCloths = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const { data } = await axios.get("/api/products");
    const cloths = data.filter((element) => {
      return element.category === "cloths";
    });

    dispatch(setElectronics(cloths));
  } catch (error) {
    dispatch(
      setError(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
          ? error.message
          : "An unexpected error has occured. Please try again later."
      )
    );
  }
};
export const getMen = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const { data } = await axios.get("/api/products");
    const men = data.filter((element) => {
      return element.brand === "apple";
    });

    dispatch(setElectronics(men));
  } catch (error) {
    dispatch(
      setError(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
          ? error.message
          : "An unexpected error has occured. Please try again later."
      )
    );
  }
};

export const getwomen = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const { data } = await axios.get("/api/products");
    const men = data.filter((element) => {
      return element.brand === "women";
    });

    dispatch(setElectronics(men));
  } catch (error) {
    dispatch(
      setError(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
          ? error.message
          : "An unexpected error has occured. Please try again later."
      )
    );
  }
};
export const getHomeAppliances = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const { data } = await axios.get("/api/products");
    const men = data.filter((element) => {
      return element.brand === "homeappliances";
    });

    dispatch(setElectronics(men));
  } catch (error) {
    dispatch(
      setError(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
          ? error.message
          : "An unexpected error has occured. Please try again later."
      )
    );
  }
};
export const getHotSale = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const { data } = await axios.get("/api/products");
    const men = data.filter((element) => {
      return element.brand === "hotsale";
    });

    dispatch(setElectronics(men));
  } catch (error) {
    dispatch(
      setError(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
          ? error.message
          : "An unexpected error has occured. Please try again later."
      )
    );
  }
};

export const getProduct = (id) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const { data } = await axios.get(`/api/products/${id}`);
    dispatch(setProduct(data));
  } catch (error) {
    dispatch(
      setError(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
          ? error.message
          : "An unexpected error has occured. Please try again later."
      )
    );
  }
};

export const createProductReview =
  (productId, userId, comment, rating, title) => async (dispatch, getState) => {
    dispatch(setLoading());
    const {
      user: { userInfo },
    } = getState();

    try {
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        `/api/products/reviews/${productId}`,
        { comment, userId, rating, title },
        config
      );
      localStorage.setItem("userInfo", JSON.stringify(data));
      dispatch(productReviewed());
    } catch (error) {
      dispatch(
        setError(
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
            ? error.message
            : "An unexpected error has occured. Please try again later."
        )
      );
    }
  };

export const resetProductError = () => async (dispatch) => {
  dispatch(resetError());
};
