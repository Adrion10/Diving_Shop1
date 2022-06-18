import React from "react";
import products from "../products";
import Product from "../Product";
import { Row, Col } from "react-bootstrap";

const HomeScreen = () => {
  return (
    <>
      <h1>PRODUCTS</h1>
      <Row>
        {products.map((product) => {
          return (
            <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
              <Product product={product} />
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default HomeScreen;