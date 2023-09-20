import React, { useState,useEffect } from "react";
import ProductCard from "./ProductCard";
import MainScreen from "../../components/MainScreen";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../../actions/productActions";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import "./MyProducts.css"; 

function MyProducts({ history, search }) { 
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const [categoryCollapsed, setCategoryCollapsed] = useState({});
  // Function to toggle the collapse state of a category
  const toggleCategoryCollapse = (category) => {
    setCategoryCollapsed((prevState) => ({
      ...prevState,
      [category]: !prevState[category],
    }));
  };

  useEffect(() => {
    dispatch(listProducts());
    if (!userInfo) {
      history.push("/");
    }
  }, [
    dispatch,
    history,
    userInfo,
  ]);

  return (
      <div className="products-page">
      <MainScreen title={`Welcome Back ${userInfo && userInfo.name}..`}>
        {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
        {loading && <Loading />}
        {products &&
          Object.keys(products).length > 0 &&
          Object.keys(products).map((category) => (
            <div className="category" key={category}>
              <div className="category-header">
                <h1>{category.toUpperCase()}</h1>
                <button
                  className="collapse-button"
                  onClick={() => toggleCategoryCollapse(category)}
                >
                  {categoryCollapsed[category] ? (
                    <i className="fa fa-chevron-up icon-chevron-down"></i>
                  ) : (
                    <i className="fa fa-chevron-down icon-chevron-down"></i>
                  )}
                </button>
              </div>
              <div
                className={`product-cards ${
                  categoryCollapsed[category] ? "collapsed" : ""
                }`}
              >
                {products[category].map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          ))}
      </MainScreen>
    </div>
  );
}

export default MyProducts;
