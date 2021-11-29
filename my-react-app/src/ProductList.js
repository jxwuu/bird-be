import React from "react";
import "./ProductList.css";
import PurchaseOptions from "./PurchaseOptions";

export default class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: [],
      price: 0,
      recipient: "",
      allergies: "",
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

  handleChangeRecipient(event) {
    this.setState({ recipient: event.target.value });
  }

  handleChangeAllergies(event) {
    this.setState({ allergies: event.target.value });
  }

  render() {
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
            name="recipient"
            onChange={(event) => this.handleChangeRecipient(event)}
            className={
              this.state.recipient !== ""
                ? "input input__lg"
                : "input input__lg__red"
            }
            value={this.state.recipient}
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
            name="allergies"
            autoComplete="off"
            onChange={(event) => this.handleChangeAllergies(event)}
            value={this.state.allergies}
            placeholder="Allergies"
          />
          <div>
            <PurchaseOptions
              data={item}
              parentCallback={this.callbackFunction}
              recipient={this.state.recipient}
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
