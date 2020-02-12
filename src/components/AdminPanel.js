import React, { Component } from "react";
import { fbase, firebaseApp } from "../fbase";
import { Link } from "react-router-dom";

class AdminPanel extends Component {
  state = {
    itemList: [],
    item: {
      id: "",
      name: "",
      itemType: "",
      description: "",
      image: "",
      price: "",
      toggleClick: false
    },
    loggedIn: false,
    email: "",
    password: ""
  };

  handleLoginChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleChange = e => {
    const newItem = {
      ...this.state.item,
      [e.target.name]: e.target.value
    };

    this.setState({
      item: newItem
    });
  };

  addNewItem = e => {
    if (Array.isArray(this.state.itemList)) {
      this.setState({ itemList: [...this.state.itemList, newItem] });
    } else {
      this.setState({ itemList: [newItem] });
    }

    e.preventDefault();

    let newItem = { ...this.state.item };
    // this.props.addNewItem(newItem);

    this.setState({
      itemList: [...this.state.itemList, newItem],

      item: {
        id: "",
        name: "",
        itemType: "",
        description: "",
        image: "",
        price: "",
        toggleClick: false
      }
    });
  };

  componentDidMount() {
    if (localStorage.getItem("loggedIn")) {
      this.setState({ loggedIn: localStorage.getItem("loggedIn") });
    }
    this.ref = fbase.syncState("my-store-31136/items", {
      context: this,
      state: "itemList"
    });
  }

  componentWillUnmount() {
    fbase.removeBinding(this.ref);
  }

  authenticate = e => {
    e.preventDefault();
    firebaseApp
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        this.setState({
          loggedIn: true
        });
      })
      .catch(() => {
        alert("Unable to authenticate");
      });
  };
  handleLogOut = () => {
    firebaseApp.auth().signOut();
  };

  render() {
    return (
      <div>
        {!this.state.loggedIn && (
          <form onSubmit={this.authenticate}>
            <input
              type="text"
              placeholder="email"
              id="email_bs"
              name="email"
              className="form-control email"
              onChange={this.handleLoginChange}
              value={this.state.email}
            />
            <input
              type="password"
              id="password_bs"
              name="password"
              className="form-control password"
              onChange={this.handleLoginChange}
              value={this.state.passowrd}
            />
            <button type="submit" className="btn btn-primary login">
              Log In
            </button>
          </form>
        )}
        {this.state.loggedIn && (
          <div className="adminPanel col-md-4">
            <form onSubmit={this.addNewItem}>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Item name"
                  id="name"
                  name="name"
                  className="form-control"
                  onChange={this.handleChange}
                  value={this.state.item.name}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Item type"
                  id="itemType"
                  name="itemType"
                  className="form-control"
                  onChange={this.handleChange}
                  value={this.state.item.itemType}
                />
              </div>
              <div className="form-group">
                <textarea
                  placeholder="Item description"
                  id="itemDescription"
                  name="description"
                  className="form-control"
                  onChange={this.handleChange}
                  value={this.state.item.description}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Item image"
                  id="itemImage"
                  name="image"
                  className="form-control"
                  onChange={this.handleChange}
                  value={this.state.item.image}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Item price"
                  id="itemPrice"
                  name="price"
                  className="form-control"
                  onChange={this.handleChange}
                  value={this.state.item.price}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Add
              </button>
            </form>

            <Link to="/">
              <button className="btn btn-danger">Log out</button>
            </Link>
          </div>
        )}
      </div>
    );
  }
}
export default AdminPanel;
