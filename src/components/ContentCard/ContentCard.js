import React  from "react";// , { useState } added
import Template from "./ContentCard.jsx";


//these were added by Alejandro-Trying to get the modal button to open the form
//import ReactDOM from "react-dom";

//import ContentCard from "./ContentCard";

class ContentCard extends React.Component {

  //   [setShowForm]=useState(false);

  //  // Added to try to make the form open (render) when clicking the modal Join! button.
  //   handleModalOpen(){
  //     setShowForm(true);
  //     ReactDOM.render(<competitionForm_Component />, document.getElementById('modal-body'));
  //   }
   //Above comments are from when I tried to make the modal Join! button render and open the form. I gave up and decided to make the form appear below the cards. - Alejandro
    

  render() {
    return Template(this.props);

  }
}

export default ContentCard;
