import React    from "react";
import template from "./AppCards.jsx";

class AppCards extends React.Component {
  render() {
    return template.call(this);
  }
}

export default AppCards;
