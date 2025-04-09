import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

import { Container, Row, Col } from "react-bootstrap";

const ProductAll = () => {
  const [productlist, setProductlist] = useState([]);
  const getProducts = async () => {
    let url = "http://localhost:5000/products";
    let response = await fetch(url);
    let data = await response.json();
    setProductlist(data);
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      <Container>
        <Row>
          {productlist.map((menu) => (
            <Col lg={3}>
              <ProductCard item={menu} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductAll;
