import React, { Component } from 'react';

export default class Hello extends Component {

  constructor(props){
    super(props);    
    this.state = {
      FirstName: "",
      LastName: "",
      Address: "",
      IsSameAsBillingAddress: "",
      State : "",
      Gender: ""
    }
    this.onChangedHandler = this.onChangedHandler.bind(this);
  }

  onChangedHandler(event){
    let {name,value,type} = event.target;
    value = type == "checkbox"? event.target.checked : value
    this.setState({[name]: value})
  }

  render() {    
    return(
      <div>
        <b>Employee Form:</b> <br/> <br/>
        FirstName: <input name = "FirstName" type= "text" onChange = {this.onChangedHandler} placeholder= "Enter First Name" ></input><br/><br/>
        
        LastName: <input name = "LastName" type= "text" onChange = {this.onChangedHandler} placeholder= "Enter Last Name"></input><br/><br/>
        
        Address: <textarea name ="Address" onChange = {this.onChangedHandler}  placeholder= "Enter Address"></textarea><br/><br/>
        
        Gender: 
        <div class="control">
          <label class="radio">
            <input type="radio" name="Gender" onChange = {this.onChangedHandler} value= "Male"/>
              Male
          </label>
          <label class="radio">
            <input type="radio" name="Gender" onChange = {this.onChangedHandler} value= "Female"/>
              Female
          </label>
        </div>
        <br/>
        
        <input name = "IsSameAsBillingAddress" type= "checkbox" checked = {this.state.IsSameAsBillingAddress} onChange = {this.onChangedHandler}></input> Use same address as Billing Addres<br/><br/>

        State: 
        <select onChange = {this.onChangedHandler} name ="State">
          <option value="Maharashtra" >Maharashtra</option>
          <option value="Goa">Goa</option>
          <option value="Delhi">Delhi</option>          
        </select>
        <br/>
        <br/>

        --------------------------------------------------------- <br/>
        
        <b>Employee Summary:</b> <br/> 

        <div>
          Name: {this.state.FirstName} {this.state.LastName} <br/>
          Address: {this.state.Address} <br/>
          Gender: {this.state.Gender} <br/>
          Is Billing AddressSame: {this.state.IsSameAsBillingAddress ? 'true':'false'} <br/>
          State: {this.state.State} <br/>          
        </div>

        
      </div>
    )
  }
}