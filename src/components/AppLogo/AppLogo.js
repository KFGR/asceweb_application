import React    from "react";
import template from "./AppLogo.jsx";

class AppLogo extends React.Component {
  render() {
    return template(this.props);
  }
}

export default AppLogo;