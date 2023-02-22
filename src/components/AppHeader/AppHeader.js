import React    from "react";
import template from "./AppHeader.jsx";

class AppHeader extends React.Component {
  render() {
    return template.call(this);
  }
}

export default AppHeader;
