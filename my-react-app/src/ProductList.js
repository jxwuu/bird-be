import React from 'react';
import './ProductList.css';
import PurchaseOptions from './PurchaseOptions';
import  SubmitButton from './SubmitButton.js';
import Sum from './Sum.js';

export default class ProductList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {product: []};
    }

    componentDidMount() {
      this.ProductList();
    }
    
  
    ProductList() {

      fetch("https://web-ge8buw2ff-bird-and-be.vercel.app/api/interview", {
  "method": "GET",
  "headers": {
    "x-rapidapi-host": "web-ge8buw2ff-bird-and-be.vercel.app",
    "x-rapidapi-key": "apikey"
  }
})
.then(response => response.json())
.then(response => {
  this.setState({
    product: response.products
  })
})
.catch(err => { console.log(err); 
});

    }
    

//     description: "<h3><strong>When your eggs need some extra love.</strong></h3>\n<div><span>You can&rsquo;t stop the clock, but you can equip your eggs with a prenatal that goes above and beyond. This one&rsquo;s got all the go-tos you&rsquo;d expect, plus choline (which most prenatals skip or skimp on) and other powerful antioxidants and ingredients like COQ10, PQQ and NAC to protect DNA and fend off everyday stressors.&nbsp;</span></div>\n<h3><strong>What makes it special.</strong></h3>\n<ul>\n<li><span>30 daily packs to simplify your routine&mdash;just one sachet a day</span></li>\n<li><span>Scientifically backed ingredients like NAC, COQ10, PQQ and Reservatrol to support egg quality.</span></li>\n<li><span>High-quality bioavailable ingredients (that means they&rsquo;re ready for your body to use) at just the right dosages</span></li>\n<li><span>Free of gluten, dairy, shellfish, yeast, colors/dyes and preservatives.&nbsp;</span><br /><span></span></li>\n</ul>\n<h3><strong>Who it's designed for.</strong></h3>\n<div><span>Women and people with eggs and/or a uterus who:</span></div>\n<ul>\n<li><span>are over 30 and thinking about trying</span></li>\n<li><span>have been trying for more than 6 months</span></li>\n<li><span>are supported by a fertility clinic&nbsp;</span></li>\n</ul>\n"
// id: 150
// meta_description: "A premium prenatal designed for women and people with eggs, with ingredients like NAC, COQ10, and PQQ that support fertility and egg health."
// modifiers: (2) [{…}, {…}]
// name: "The Power Prenatal (for eggs)"
// options: []
// page_title: "The Power Prenatal (for eggs)"
// price: 60
// primary_image: {description: 'The Power Prenatal for eggs box', url_standard: 'https://cdn11.bigcommerce.com/s-7vai0w05ca/product…52115.1280.1280__02320.1626025242.386.513.jpg?c=1'}
// search_keywords: "Prenatal, Women's prenatal, vitamins, prenatal vitamins, prenatals, egg health, antioxidants"
// sku: "PNV-PWREGGS-1"
// type: "physical"

    // <Todo
    //   id={task.id}
    //   name={task.name}
    //   completed={task.completed}
    //   key={task.id}
    //   toggleTaskCompleted={toggleTaskCompleted}
    //   deleteTask={deleteTask}
    //   editTask={editTask}
    // />

    //   const nah = { id: response.id, name: response.name, 
//     meta_description: response.meta_description,
//   modifiers: response.modifiers,
// page_title: response.page_title,
// price: response.price,
// primary_image_url: response.primary_image.url_standard,
// primary_image_descrip: response.primary_image.description,
// search_keywords: response.search_keywords,
// sku: response.sku, 
// type: response.type  };
  
    render() {
      console.log(this.state.product);
      
      const products = this.state.product.map((item, i) => (
        <div className="todoapp stack-large">
        <div id= {item.id} key= {item.id}>
          <div className= "heading">
          <h1>{ item.name}</h1>
          <h3>${item.price}</h3>
          </div>
          <h2>1 month supply</h2>
          <div className ="description">
          <p> {item.meta_description}</p>
          <img src={item.primary_image.url_standard} alt={item.primary_image.description}></img>
          
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

      < PurchaseOptions/>
      < SubmitButton />
      <Sum />
      
        </div>
        </div>
      ));
      console.log(products);
  
      return (
        <div id="layout-content" className="layout-content-wrapper">
          <div className="panel-list">{products}</div>
        </div>
      );
    }
  }

//   <label className="inputLabel">
//   What needs to be done?
// </label>
//   <input
// type="text"
// id="new-todo-input"
// className="inputName"
// name="text"
// autoComplete="off"
// />