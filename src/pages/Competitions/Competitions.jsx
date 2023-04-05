import "./Competitions.css";
import React from "react";


function Template() { 
  return(

  <div className="Competitions">
      <section>
      <h1 className = 'classHeaderOne'>Competitions</h1> {/*css class for page title is classHeaderOne and has the name "title"*/}
      <h2>There are several ASCE competitions.</h2>
      </section>
      <h3>All of the following regional competitions will be held from March 23, 2023 to March 25, 2023.</h3>
      
      
      <section>
      <div>
      <ol className = 'firstCompetitionsList'>
      <h4>Of these competitions, the most important are:</h4>
      <li>Concrete Canoe</li>
      <li>Steel Bridge</li>
      <li>Timber Strong</li>
      <li>Sustainable Solutions</li>
      <li>Innovation Contest</li>
      <li>Surveying</li> 
      <li>Construction Institute</li>
      </ol>
      </div>
      <div>
      <ol className="secondCompetitionList">
      <h5>The rest are:</h5>
      <li>Concrete Bridge</li>
      <li>Traffic Control</li>
      <li>Geo-Wall</li>
      <li>Muddy Waters</li>
      <li>Concrete Cornhole</li>
      <li>Plans Reading</li>
      <li>Professional Paper</li>
      <li>T-Shirt Contest</li>
      <li>Mystery Competition</li>
      </ol>
      </div>
      </section>

      <section>
      
      </section>

    </div>
  );
  };
export default Template; //changed Template to App

/*<div className="Competitions">
      <section>
      <h1 className = 'classHeaderOne'>Competitions</h1> {/*css class for page title is classHeaderOne and has the name "title"*//*}
      <h2>There are several ASCE competitions.</h2>
      </section>
      <h3>All of the following regional competitions will be held from March 23, 2023 to March 25, 2023.</h3>
      
      
      <section>
      <div>
      <ol className = 'firstCompetitionsList'>
      <h4>Of these competitions, the most important are:</h4>
      <li>Concrete Canoe</li>
      <li>Steel Bridge</li>
      <li>Timber Strong</li>
      <li>Sustainable Solutions</li>
      <li>Innovation Contest</li>
      <li>Surveying</li> 
      <li>Construction Institute</li>
      </ol>
      </div>
      <div>
      <ol className="secondCompetitionList">
      <h5>The rest are:</h5>
      <li>Concrete Bridge</li>
      <li>Traffic Control</li>
      <li>Geo-Wall</li>
      <li>Muddy Waters</li>
      <li>Concrete Cornhole</li>
      <li>Plans Reading</li>
      <li>Professional Paper</li>
      <li>T-Shirt Contest</li>
      <li>Mystery Competition</li>
      </ol>
      </div>
      </section>

      <section>
      
      </section>

}</div>*/