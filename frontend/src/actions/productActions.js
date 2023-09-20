import {
      PRODUCT_LIST_REQUEST,
      PRODUCT_LIST_SUCCESS,
      PRODUCT_LIST_FAIL,
    } from "../constants/productsConstans";
    import axios from "axios";

    export const listProducts = () => async (dispatch, getState) => {
      try {  
        dispatch({
          type: PRODUCT_LIST_REQUEST,
        });
    
        const { data } = await axios.get(`https://dummyjson.com/products`);

        const categorizedProducts = data.products.reduce((categories, product) => {
            const category = product.category;
            if (!categories[category]) {
              categories[category] = [];
            }
            categories[category].push(product);
            return categories;
          }, {});

        dispatch({
          type: PRODUCT_LIST_SUCCESS,
          payload: categorizedProducts,
        });
      } catch (error) {
        const message =
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message;
        dispatch({
          type: PRODUCT_LIST_FAIL,
          payload: message,
        });
      }
    };