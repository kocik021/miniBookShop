import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  state = {
    storeName: "Zaprogramuj się!"
  };
  render() {
    return (
      <div className="header row">
        <button
          onClick={this.props.handleShowOrder}
          className="btn btn-add smaller"
        >
          KOSZYK
        </button>
        <h1 className="center">{this.state.storeName}</h1>
        <Link to="/admin">
          <button className="btn smaller btn-add go-to-admin">
            Administrator Panel
          </button>{" "}
        </Link>
      </div>
    );
  }
}

export default Header;
