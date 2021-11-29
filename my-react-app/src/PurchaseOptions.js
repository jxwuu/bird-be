import React, { useState } from "react";
import "./SubmitButton.css";

function PurchaseOptions(props) {
  const [price, setPrice] = useState(0);
  const [isBuying, setBuying] = useState(false);

  let total = 0;
  function handleChange(e) {
    setPrice(calculatePrice(e.currentTarget.value));
    e.preventDefault();
  }

  function calculatePrice(multiplier) {
    return (multiplier * props.data.price).toFixed(2);
  }

  function subtractTotal(price) {
    total -= price;
    props.parentCallback(total);
  }

  function addTotal(price) {
    total += price;
    props.parentCallback(total);
  }

  const removeTemplate = (
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
          <label className="labels">One-time purchase</label>
          <input
            type="radio"
            id="subscription"
            name="drone"
            value="2.70"
            onChange={() => {
              handleChange();
            }}
          />
          <label className="labels">
            Subscribe every 3 months and save 10%
          </label>
        </div>
      </form>
      <div className="btn-group">
        <button
          type="submit"
          className="blackButton"
          onClick={() => {
            subtractTotal(price);
            setBuying(false);
          }}
        >
          Remove from cart
        </button>
      </div>
    </div>
  );

  const addTemplate = (
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
          <label className="labels">One-time purchase</label>
          <input
            type="radio"
            id="subscription"
            name="drone"
            value="2.70"
            onChange={handleChange}
          />
          <label className="labels">
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
              addTotal(price);
              setBuying(true);
            }}
          >
            Add to cart ${price}
          </button>
        </div>
      </div>
    </div>
  );

  return <li className="todo">{isBuying ? removeTemplate : addTemplate}</li>;
}

export default PurchaseOptions;
