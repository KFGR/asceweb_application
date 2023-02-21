import React    from "react";
import template from "./Logo.jsx";

class Logo extends React.Component {
  render() {
    return template.call(this);
  }
}

export default Logo;
