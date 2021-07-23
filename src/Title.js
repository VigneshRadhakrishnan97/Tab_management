import React from "react";
import "./style.css";


class Title extends React.Component {
state={display:0};

  design = {
    borderBottom: "2px",
    borderBottomColor: "red",
    color: "red",
    borderBottomStyle: "solid",
  };



  render() {
    return (
      <div
        className="title-box"
        style={this.props.design > 0 ? this.design : null}
        onClick={() => this.props.click(this.props.name)}
        onMouseOver={() => this.setState({ display: 1 })}
        onMouseOut={() => this.setState({ display: 0 })}
      >
        <p style={{ textAlign: "center" }}>{`${this.props.name}`}</p>
        <span
          className="close"
          style={{ display: this.state.display === 1 ? "inline" : "none" }}
        >
          <button
            className="btn-close"
            onClick={() => this.props.close(this.props.name)}
          >
            X
          </button>
        </span>
      </div>
    );
  }
}

export default Title;
