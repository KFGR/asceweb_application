import React    from "react";
import template from "./HeaderHero.jsx";

class HeaderHero extends React.Component {
  render() {
    return template.call(this);
  }
}

export default HeaderHero;
