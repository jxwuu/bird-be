// import React, { useState } from "react";
import './SubmitButton.css';

// function SubmitButton(props) {
//     const [buttonText, setButtonText] = useState("Add To Cart");
//     const [color, setColor] = useState(false);

//     const changeText = (text) => setButtonText(text);
//     // const switchColor = setColor(!color);

//     // const addToCart = (
//     //     <button onClick={() => changeText("newText")} class="whiteButton">{buttonText}</button>
//     // )
//     // const removeFromCart = (
//     //     <button onClick={() => changeText("newText")} class="blackButton">{buttonText}</button>
//     // )
  

//     // return <li className="todo">{color ? addToCart :removeFromCart}</li>;
//           return (
//             //    <div>
//             //        <button className={btn_class}
//             //         onPress={this.onPress}
//             //                onClick={this.changeColor.bind(this)}>
//             //                  {textValue}
//             //         </button>
//             //    </div>
//         <button onClick={() => changeText("Remove From Cart")}>{buttonText}</button>
//           )
// }

  
//   export default SubmitButton;


import React, { useState } from "react";

export default function SubmitButton(props) {
    const [isEditing, setEditing] = useState(false);
    let total = 0; 

      function handleSubmit(e) {
        e.preventDefault();
        setEditing(false);
      }

      function calculatePrice(e) {
          total += 10; console.log(total);
      }

    const editingTemplate = (
          <div className="btn-group">
            <button type="submit" className="blackButton"  onClick={() => {setEditing(false); calculatePrice(false);}}>
              Remove from cart
              <span className="visually-hidden">new name for {props.name}</span>
            </button>
          </div>
      );


      
      const viewTemplate = (
        <div className="stack-small">
          <div className="c-cb">
            </div>
            <div className="btn-group">
              <button type="button" className="whiteButton" onClick={() => {setEditing(true);calculatePrice(true);}}>
                  Add to cart <span className="visually-hidden">{props.name}</span>
</button>
            </div>
        </div>
      );
      

      return <li className="todo">{isEditing ? editingTemplate : viewTemplate}</li>;
  }
