import React, { useState } from "react";
import "./SubmitButton.css";

function PurchaseOptions(props) {
  const [price, setPrice] = useState("");
  const [isEditing, setEditing] = useState(false);
  function handleChange(e) {
    setPrice(calculatePrice(e.target.value));
  }

  function calculatePrice(multiplier) {
    return (multiplier * props.data.price).toFixed(2);
  }

  const editingTemplate = (
    <div>
      <form className="purchaseOptions">
        <div>
          <input
            type="radio"
            id="1time"
            name="drone"
            value="1.00"
            onChange={() => {
              handleChange();
            }}
          />
          <label className="labels">
            One-time purchase
          </label>
          <input
            type="radio"
            id="subscription"
            name="drone"
            value="2.70"
            onChange={() => {
              handleChange();
            }}
          />
          <label  className="labels">
            Subscribe every 3 months and save 10%
          </label>
        </div>
      </form>
      <div className="btn-group">
        <button
          type="submit"
          className="blackButton"
          onClick={() => {
            setEditing(false);
          }}
        >
          Remove from cart
        </button>
      </div>
    </div>
  );

  const viewTemplate = (
    <div>
      <form className="purchaseOptions">
        <div>
          <input
            type="radio"
            id="1time"
            name="drone"
            value="1.00"
            onChange={handleChange}
          />
          <label  className="labels">
            One-time purchase
          </label>
          <input
            type="radio"
            id="subscription"
            name="drone"
            value="2.70"
            onChange={handleChange}
          />
          <label  className="labels">
            Subscribe every 3 months and save 10%
          </label>
        </div>
      </form>
      <div className="btn-group">
        <div className="c-cb"></div>
        <div className="btn-group">
          <button
            type="button"
            className="whiteButton"
            onClick={() => {
              setEditing(true);
            }}
          >
            Add to cart ${price}
          </button>
        </div>
      </div>
    </div>
  );

  return <li className="todo">{isEditing ? editingTemplate : viewTemplate}</li>;
}

export default PurchaseOptions;
