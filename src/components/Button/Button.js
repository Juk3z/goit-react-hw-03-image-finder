import { Component } from "react";
import PropTypes from "prop-types";

class Button extends Component {
  static defaultProps = {
    text: "Just Button",
  };

  static propTypes = {
    onClick: PropTypes.func.isRequired,
  };

  componentDidMount() {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }

  render() {
    const { text, onClick } = this.props;
    return (
      <button className="Button" onClick={onClick} type="button">
        {text}
      </button>
    );
  }
}

export default Button;
