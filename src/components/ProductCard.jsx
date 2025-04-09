import React from "react";
import { useNavigate } from "react-router-dom";
import ProductDetail from "../page/ProductDetail";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/Product/${item.id}`);
  };
  return (
    <div className="hover-grow" onClick={showDetail}>
      <img className="product-img" src={item?.img} alt="" />
      <div>{item?.choice == true ? "Conscious choice" : ""}</div>
      <div>{item?.title}</div>
      <div>${item?.price}</div>

      <div>{item?.new == true ? "신제품품" : ""}</div>
    </div>
  );
};

export default ProductCard;
