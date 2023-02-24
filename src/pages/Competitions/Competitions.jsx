<link ref="Competitions" href="Competitions.css"/>
import "./Competitions.css";
import React from "react";

function template() {
  return (
    <div className="competitions">
      <h1 classHeaderOne="title">Competitions</h1> //css class for page title is classHeaderOne and has the name "title"
      <h2>There are several ASCE competitions.</h2>
      <h3>All of the following regional competitions will be held from March 23, 2023 to March 25, 2023.</h3>
 
      <h4>Of these competitions, the most important are:</h4>
      <ol>
      <li>1. Concrete Canoe</li>
      <li>2. Steel Bridge</li>
      <li>3. Timber Strong</li>
      <li>4. Sustainable Solutions</li>
      <li>5. Innovation Contest</li>
      <li>6. Surveying</li> 
      <li>7. Construction Institute</li>
      </ol>
      
 
      <h5>The rest are:</h5>
      <ol>
      <li>1. Concrete Bridge</li>
      <li>2. Traffic Control</li>
      <li>3. Geo-Wall</li>
      <li>4. Muddy Waters</li>
      <li>5. Cncrete Cornhole</li>
      <li>6. Plans Reading</li>
      <li>7. Professional Paper</li>
      <li>8. T-Shirt Contest</li>
      <li>9. Mystery Competition</li>
      </ol>
    </div>
  );
};

export default template;
