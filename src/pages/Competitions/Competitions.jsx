import "./Competitions.css";
import React from "react";


/*Important Competitions: *Concrete Canoe, Steele Bridge, Timber Strong, Sustainable Solutions, Innovation Contest, Surveying, Construction Institute*/

/*Other competitions: Concrete Bridge, Traffic Control, Geo-Wall, Plans Reading, Muddy Waters, Concrete Cornhole, Professional Paper, T-shirt Contest, Mystery Competition */

function template() { 
  return(
    <div className="Competitions">
      <h1>Competitions</h1>
      <p>These are the top ASCE Competitions, celebrated annually.</p>
      
      <div class="container">
        <div class = "row">

          {/*Concrete Canoe */}
          <div class = "col-12 col-lg-3">
            <div class ="card text-center h-100 mb-2">
              <img src ="..." alt="..." class="card-img-top"/>
              <div class="d-flex justify-content-between">
                <div class="d-flex flex-row align-items-center">
                  <div class = "card-body">
                    <h2>Concrete Canoe</h2>
                    <a href="#" class="btn btn-primary">Details</a>
                  </div>
                </div>
              </div>
            
            </div>
          </div>

          {/*Steele Bridge */}
          <div class = "col-12 col-lg-3">
            <div class ="card text-center h-100 mb-2">
              <img src ="..." alt="..." class="card-img-top"/>
              <div class="d-flex justify-content-between">
                <div class="d-flex flex-row align-items-center">
                  <div class = "card-body">
                    <h3>Steele Bridge</h3>
                    <a href="#" class="btn btn-primary">Details</a>
                  </div>
                </div>
              </div>
            
            </div>
          </div>

          {/*Timber Strong */}
          <div class = "col-12 col-lg-3">
            <div class ="card text-center p-3 mb-2 h-100 mb-3">
              <img src ="..." alt="..." class="card-img-top"/>
              <div class="d-flex justify-content-between">
                <div class="d-flex flex-row align-items-center">
                  <div class = "card-body">
                    <h4>Timber Strong</h4>
                    <a href="#" class="btn btn-primary">Details</a>
                  </div>
                </div>
              </div>
            
            </div>
          </div>

          {/*Sustainable Solution */}
          <div class = "col-12 col-lg-3">
            <div class ="card text-center p-3 mb-2 h-100 mb-3">
              <img src ="..." alt="..." class="card-img-top"/>
              <div class="d-flex justify-content-between">
                <div class="d-flex flex-row align-items-center">
                  <div class = "card-body">
                    <h5>Sustainable Solutions</h5>
                    <a href="#" class="btn btn-primary">Details</a>
                  </div>
                </div>
              </div>
            
            </div>
          </div>

          {/*Innovation Contest */}
          <div class = "col-12 col-md-5 col-lg-4">
            <div class ="card text-center  mt-2">
              <img src ="..." alt="..." class="card-img-top"/>
              <div class="d-flex justify-content-between">
                <div class="d-flex flex-row align-items-center">
                  <div class = "card-body">
                    <h6>Innovation Contest</h6>
                    <a href="#" class="btn btn-primary">Details</a>
                  </div>
                </div>
              </div>
            
            </div>
          </div>

          {/*Surveying */}
          <div class = "col-12 col-md-5 col-lg-4">
            <div class ="card text-center  mt-2">
              <img src ="..." alt="..." class="card-img-top"/>
              <div class="d-flex justify-content-between">
                <div class="d-flex flex-row align-items-center">
                  <div class = "card-body">
                    <h7>Surveying</h7>
                    <a href="#" class="btn btn-primary">Details</a>
                  </div>
                </div>
              </div>
            
            </div>
          </div>

          {/*Construction Institure */}
          <div class = "col-12 col-md-5 col-lg-4">
            <div class ="card text-center p-2 mt-2">
              <img src ="..." alt="..." class="card-img-top"/>
              <div class="d-flex justify-content-between">
                <div class="d-flex flex-row align-items-center">
                  <div class = "card-body">
                    <h8>Construction Institute</h8>
                    <a href="#" class="btn btn-primary">Details</a>
                  </div>
                </div>
              </div>
            
            </div>
          </div>

        </div>
      </div>

    </div>

  );
};
export default template;     