import React, { Component } from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import "../index.css";
import Footer from "./Footer";
import "../App.css";

class App extends Component {
  state = {
    order: [],
    inCart: [{ price: "0" }],
    showOrder: false,
    toPay: 0
  };

  inCartCheck = item => {
    if (this.state.inCart > 0) {
      this.setState({
        inCart: [...this.state.inCart, parseFloat(item.price)]
      });
    } else if (this.state.inCart <= 0) {
      this.setState({
        inCart: [...this.state.order, parseFloat(item.price)]
      });
    } else {
      this.setState({
        inCart: [...this.state.inCart, parseFloat(item.price)]
      });
    }
  };

  addToOrder = item => {
    this.setState({
      order: [...this.state.order, item],
      inCart: [...this.state.inCart, item]
    });
  };

  removeFromOrder = (name, id) => {
    this.setState({
      order: this.state.order.filter(item => name !== item.name),
      inCart: this.state.order.filter(item => name !== item.name)
    });
  };

  handleShowOrder = () => {
    this.setState({
      showOrder: !this.state.showOrder
    });
  };

  clearCart = () => {
    this.setState({
      order: [],
      inCart: [{ price: 0 }]
    });
  };

  render() {
    return (
      <div className="app">
        <Header handleShowOrder={this.handleShowOrder} />
        <div className="row">
          <Order
            inCart={this.state.inCart}
            order={this.state.order}
            removeFromOrder={this.removeFromOrder}
            showOrder={this.state.showOrder}
            clearCart={this.clearCart}
          />
          <Inventory
            itemList={this.state.itemList}
            addToOrder={this.addToOrder}
            showOrder={this.state.showOrder}
          />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
