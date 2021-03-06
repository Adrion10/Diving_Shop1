import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">
            <p>Copyright &copy;DivingShop 2022</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
