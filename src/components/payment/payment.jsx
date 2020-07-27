import React, { Component } from 'react';
import './payment.css';
import Client from './client'


// https://api.fundmylaptop.com/api/payment/validate
// https://api.fundmylaptop.com/api/payment/pay


class Payment extends Component{
    constructor(props){
        super(props);
        this.state = {
           fields : {
            card_number:"",
            cvv:"",
            amount:"",
            expiry_year:"",
            expiry_month:"",
            fundee:""
           }
        }
    }
    onInputChange (name,value){
        const fields = Object.assign({}, this.state.fields);
        fields[name] = value;
        this.setState({fields});
        console.log(this.state.fields)
    }
    validate(){
        return (evt) => {
            evt.preventDefault();
        let body = {
            card_number:this.state.fields.card_number,
            cvv:this.state.fields.cvv,
            amount:this.state.fields.amount,
            expiry_year:this.state.fields.expiry_year,
            expiry_month:this.state.fields.expiry_month,
            fundee:this.state.fields.fundee  
        }

        Client.validate(body).then( response => {
            console.log(response)
            try{
                if(response.error === true){
                   
                }
                else{
                   
                }
            }
            catch(e){
                console.log(e);
            }
        })
        }
    }




render (){
return(
<div className="container cover">
    <div className="form-wrapper ">
        <div id="close">
            <h1>&times;</h1>
        </div>
        <div className="form-content">
            <div className="form-header">
                <h1>Fund this Campaign</h1>
            </div>
            <form action="" method="POST" onSubmit={this.validate()}>
                <div className="row">
                    <label for="">Choose Your preferred method of payment</label>
                    <select className="col-md-12">
                    </select>
                    <label for="">How much do you plan to donate to this campaign</label>
                    <input className="col-md-12" type="text" name="amount" value={this.state.amount} onChange={(e) => {this.onInputChange(e.target.name, e.target.value)}}/>
                    <div className="split">
                        <div>
                            <label for="">Card Holder Name</label>
                            <input type="text" name="card_name" onChange={(e) => {this.onInputChange(e.target.name, e.target.value)}}/>
                        </div>
                        <div>
                            <label for="">Card Number</label>
                            <input type="text" name="card_number" value={this.state.card_number} onChange={(e) => {this.onInputChange(e.target.name, e.target.value)}}/>
                        </div>
                    </div>
                    <div className="split">
                        <div>
                            <label for="">Card Expiry Date</label>
                            <input type="text" name="card_expiry" value={this.state.expiry_year} onChange={(e) => {this.onInputChange(e.target.name, e.target.value)}}/>
                        </div>
                        <div>
                            <label for="">CVV</label>
                            <input type="text"  name="cvv" value={this.state.cvv} onChange={(e) => {this.onInputChange(e.target.name, e.target.value)}}/>
                        </div>
                    </div>
                </div>
                <div className="but">
                    <button className="btn" type="submit">FUND NOW</button>
                    <p>Secured by Flutterwave</p>
                </div>
            </form>
        </div>
    </div>
</div>

)
}
}

export default Payment;
