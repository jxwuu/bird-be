import React, { useState } from "react";

function PurchaseOptions(props) {
  const [price, setPrice] = useState("");

  function handleChange(e) {
    console.log(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    setPrice(3);
  }
  return (
      <form className="wrapper">
    <div>
    <input type="radio" id="1time" name="drone" value={price}
           onChange={handleChange}
           checked={price}  />
    <label for="1time" className= "labels">One-time purchase</label>
  </div>
  
  <div>
    <input type="radio" id="subscription" name="drone" value={price}  checked={price}
     onChange={handleChange}/>
    <label for="subscription"  className= "labels">Subscribe every 3 months and save 10%</label>
  </div>
  </form>
  );
}

export default PurchaseOptions;


// var SearchResult = React.createClass({
//   getInitialState: function () {
//     return {
//       site: '',
//       address: ''
//     };
//   },
//   onSiteChanged: function (e) {
//     this.setState({
//       site: e.currentTarget.value
//       });
//   },

//   onAddressChanged: function (e) {
//     this.setState({
//       address: e.currentTarget.value
//       });
//   },

//   render: function(){
//        var resultRows = this.props.data.map(function(result){
//            return (
//                <tbody>
//                     <tr>
//                         <td><input type="radio" name="site_name" 
//                                    value={result.SITE_NAME} 
//                                    checked={this.state.site === result.SITE_NAME} 
//                                    onChange={this.onSiteChanged} />{result.SITE_NAME}</td>
//                         <td><input type="radio" name="address" 
//                                    value={result.ADDRESS}  
//                                    checked={this.state.address === result.ADDRESS} 
//                                    onChange={this.onAddressChanged} />{result.ADDRESS}</td>
//                     </tr>
//                </tbody>
//            );
//        }, this);
//        return (
//            <table className="table">
//                <thead>
//                    <tr>
//                        <th>Name</th>
//                        <th>Address</th>
//                    </tr>
//                </thead>
//                 {resultRows}
//                <tfoot>
//                    <tr>
//                        <td>chosen site name {this.state.site} </td>
//                        <td>chosen address {this.state.address} </td>
//                    </tr>
//                </tfoot>
//            </table>
//        );
//   }
// });
//