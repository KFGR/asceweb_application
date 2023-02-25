import "./AppCards.css";
// import { useState  } from "react";
import React from "react";

function template(props){
  return(
    <div className="AppCards">
       <div key={props.id} className='productCard'>
                 <div className='productCard__content'>
                     <h3 className='mission'>{props.mission}</h3>
                     <div className='displayStack__1'>
                         <div className='vision'>${props.vision}</div>
                         <div className='value'>{props.value} units sold</div>
                     </div>
                 </div>
             </div>
    </div>

  );
}; 
export default template;



// function template() {
//   return (
//     <div className="AppCards">
//        <div className="container bg-light  container-values">
//         <div class="box left-section">
          
//         </div>
//       </div>
// {/*    
//       {/* <section id='Maincontent'>
//         <div className="container-fluid container-blue justify-content-center">
//           <div className="container bg-light  container-values">
//               <div class="box left-section">
//                 n,
//               </div>
//               <div class="separator"></div>
//               <div class="box middle-section">
//                 kkkkkkkkkkkk
//               </div>
//               <div class="separator"></div>

//               <div class="box right-section">
//                 ghjn vghj
//               </div>
//           </div>
//         </div>
//       </section> */} */}
//      </div>
//   );
// };

// export default template;
