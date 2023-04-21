import React    from "react";
import template from "./ContentCard.jsx";

class ContentCard extends React.Component {
  render() {
    return template(this.props);
  }
}

export default ContentCard;
