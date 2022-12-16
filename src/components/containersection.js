import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
function ContainerUnderNav() {
  return (
    <Container className="cont">
      <figure className="position-relative">
        <img className="img-fluid" src="https://images.unsplash.com/photo-1486428128344-5413e434ad35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="chocolate cake img" />
        <figcaption>
          Get Baking!
        </figcaption>
      </figure>
      </Container>
  );
}

export default ContainerUnderNav;