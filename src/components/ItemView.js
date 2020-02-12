import React from "react";

const ItemView = props => {
  return (
    <div className="row item-view">
      <div className="col-md-4">
        <img src={props.item.image} alt="" className="image" />
      </div>
      <div className="col-md-4 column">
        <h2 className="small">{props.item.name}</h2>
        <p>{props.item.itemType}</p>
        <p className="bold">{props.item.price} zł</p>
      </div>

      <div className="col-md-4">
        {" "}
        <button
          className="btn btn-add"
          onClick={event => props.addToOrder(props.item)}
        >
          Add to order
        </button>
      </div>
      <div className={props.toggleClick ? "show col-md-12" : "hide col-md-12"}>
        <p>{props.item.description}</p>
      </div>
    </div>
  );
};

export default ItemView;
