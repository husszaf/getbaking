import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
function Welcome() {
  return (
    <div className="pt-5 pt-md-8 pb-5">
      <div className="container">
        <div className="row align-items-center">
          <div
            class="col-12 col-md-7 col-lg-6 order-md-1 aos-init aos-animate"
          >
            <h1 class="display-3 text-center text-md-start">
              Welcome to <span class="text-primary">Get Baking!</span>
              Learn Baking
            </h1>

            <p class="lead text-center text-md-start text-muted mb-6 mb-lg-8">
            Get Baking! is an organisation aiming to encourage more people to bake at home.
            </p>

            <div class="text-center text-md-start">
              <a href="overview.html" class="btn btn-primary shadow lift me-1">
                View all Recipes{" "}
                <i class="fe fe-arrow-right d-none d-md-inline ms-3"></i>
              </a>
              <a href="/src/pages/Bake.js" class="btn btn-primary-soft lift">
                Create your own recipe
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
