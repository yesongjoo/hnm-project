import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Dropdown, Button } from "react-bootstrap";

export const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState(null);
  const getProductDetail = async () => {
    let url = `http://localhost:5000/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    setProduct(data);
    console.log(product);
  };
  useEffect(() => {
    getProductDetail();
  }, []);
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <img src={product?.img} alt="" />
          </Col>
          <Col>
            <div>{product?.title}</div>
            <div>'$'{product?.price}</div>
            <div>{product?.choice === true ? "Conscious choice" : ""}</div>
            <Dropdown>
              <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
                사이즈 선택
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">S</Dropdown.Item>
                <Dropdown.Item href="#/action-2">M</Dropdown.Item>
                <Dropdown.Item href="#/action-3">L</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Button variant="dark" type="submit">
              추가
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductDetail;
