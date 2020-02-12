import React, { Component } from "react";
import OrderView from "./OrderView";

class Order extends Component {
  state = {
    toPay: 0
  };

  render() {
    const ordered = this.props.order.map(item => {
      return (
        <OrderView item={item} removeFromOrder={this.props.removeFromOrder} />
      );
    });
    const itemsPrices = this.props.inCart.map(item => parseFloat(item.price));
    console.log(Array.from(itemsPrices));
    const arrayPrices = Array.from(itemsPrices);

    const total = arrayPrices.reduce(function(a, b) {
      return a + b;
    });

    return (
      <div className={this.props.showOrder ? "col-md-6 order" : "hidden order"}>
        <h2 className="title">Twoje zamówienie</h2>
        {ordered}
        <div className="price">
          <button
            className="btn btn-danger left"
            onClick={this.props.clearCart}
          >
            Wyczyść koszyk
          </button>
          <h2 className="title right">{total.toFixed(2)} zł</h2>
        </div>
      </div>
    );
  }
}

export default Order;
