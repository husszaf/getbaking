import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
function Welcome() {
  return (
    <>
      <Container className="pt-5 pt-md-8 pb-5">
        <Container className="container">
          <Row className="align-items-center">
            <Col className="col-12 col-md-7 col-lg-6 order-md-1 aos-init aos-animate">
              <h1 class="display-3 text-center text-md-start">
                Welcome to <span class="text-primary">Get Baking!</span>
                Where you can Learn Baking
              </h1>
              <p class="lead text-center text-md-start text-muted mb-6 mb-lg-8">
                Get Baking! is an organisation aiming to encourage more people
                to bake at home.
              </p>
              <Col class="text-center text-md-start">
                <Link className="btn btn-primary shadow lift me-1" to={`/`}>
                  View all Recipes{" "}
                  <i class="fe fe-arrow-right d-none d-md-inline ms-3"></i>
                </Link>
                <Link className="btn btn-primary-soft lift" to={`/Bake`}>
                  Create your own recipe
                </Link>
              </Col>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default Welcome;
