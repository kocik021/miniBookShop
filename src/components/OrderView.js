import React from "react";

const OrderView = props => {
  return (
    <div className="order-view row">
      <div className="col-md-4">
        <h2 className="small">{props.item.name}</h2>
      </div>
      <div className="col-md-4">
        <img src={props.item.image} alt="" className="image" />
      </div>
      <div className="col-md-4">
        <h2 className="small">{props.item.price} zł</h2>
      </div>
      <div className="col-md-4">
        <button
          className="btn btn-danger"
          onClick={event => props.removeFromOrder(props.item.name)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default OrderView;
