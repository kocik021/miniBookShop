import React, { Component } from "react";
import ItemView from "./ItemView";
import { fbase } from "../fbase";

class Inventory extends Component {
  state = {
    itemList: []
  };

  componentDidMount() {
    this.ref = fbase.syncState("my-store-31136/items", {
      context: this,
      state: "itemList"
    });
  }

  componentWillUnmount() {
    fbase.removeBinding(this.ref);
  }

  render() {
    const itemListing = this.state.itemList.map(item => (
      <ItemView
        item={item}
        addToOrder={this.props.addToOrder}
        handleDsc={this.handleDescription}
      />
    ));
    return (
      <div
        className={
          this.props.showOrder
            ? "col-md-6 inventory"
            : " row col-md-8 inventory middle"
        }
      >
        <h2 className="title">Książki</h2>
        {itemListing}
      </div>
    );
  }
}

export default Inventory;
