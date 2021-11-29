import React from "react";
import "./ProductList.css";
import PurchaseOptions from "./PurchaseOptions";

export default class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: [],
      price: 0,
    };
  }
  // error that shows up in console is unmount error

  componentDidMount() {
    this.ProductList();
  }

  ProductList() {
    fetch("https://web-ge8buw2ff-bird-and-be.vercel.app/api/interview", {
      method: "GET",
      headers: {
        "x-rapidapi-host": "web-ge8buw2ff-bird-and-be.vercel.app",
        "x-rapidapi-key": "apikey",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          product: response.products,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  callbackFunction = (getPrice) => {
    this.setState({ price: Number(this.state.price) + Number(getPrice) });
  };

  handlePrice = (Price) => {
    this.setState({ price: Price });
  };

  render() {
    console.log(this.state.language);
    const products = this.state.product.map((item) => (
      <div className="todoapp stack-large" key={item.id}>
        <div>
          <div className="heading">
            <h1>{item.name}</h1>
            <h3>${item.price}</h3>
          </div>
          <h2>1 month supply</h2>
          <div className="description">
            <p> {item.meta_description}</p>
            <img
              src={item.primary_image.url_standard}
              alt={item.primary_image.description}
            ></img>
          </div>

          <h2 className="label-wrapper">
            <label htmlFor="new-todo-input" className="label">
              Who it's for:
            </label>
          </h2>
          <input
            type="text"
            id="new-todo-input"
            className="input input__lg"
            name="text"
            autoComplete="off"
            placeholder="Recipient's name"
          />
          <h2 className="label-wrapper">
            <label htmlFor="new-todo-input" className="label">
              List any allergies:
            </label>
          </h2>
          <input
            type="text"
            id="new-todo-input"
            className="input input__lg"
            name="text"
            autoComplete="off"
            placeholder="Allergies"
          />
          <div>
            <PurchaseOptions
              data={item}
              parentCallback={this.callbackFunction}
            />
          </div>
        </div>
      </div>
    ));

    return (
      <div id="layout-content" className="layout-content-wrapper">
        <div className="panel-list">{products}</div>
        <div className="total">You're total is ${this.state.price}</div>
      </div>
    );
  }
}
