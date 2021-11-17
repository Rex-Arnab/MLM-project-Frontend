import React from 'react'
import { useParams } from 'react-router'

export default function Referal() {

    const params = useParams()
    return (
        <div>
            <div
                className="jumbotron jumbotron-fluid"
                style={{
                    height: '100vh',
                    width: '100vw',
                    position: 'relative',
                    overflow: 'hidden'
                }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                            <div className="card">
                                <div className="card-header">
                                    <b>Referal by { params.ref_id }</b>
                                </div>
                                <div className="card-body">
                                    <MasterForm referid={params.ref_id}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

        

            </div>
            
        </div>
    )
}


class MasterForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentStep: 1,
      email: "",
      name: "",
      username: "",
      password: "",
      aadhaar: "",
      phone: "",
      ref_id: props.referid,
    }
  }

  handleChange = event => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }
   
  handleSubmit = event => {
    event.preventDefault()
    console.log(this.state)
    const { email, name, username, password, aadhaar, phone, ref_id } = this.state
    if(email && name && username && password && aadhaar && phone){
      fetch('https://stormy-ridge-27884.herokuapp.com/refer/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          name,
          username,
          password,
          addhar:aadhaar,
          phone,
          head:ref_id
        })
      })
      .then(res => res.json())
      .then(res => {
        if(res.success){
          alert("Successfully registered")
        }
        else{
          alert("Error in registration")
        }
      })
    }
  }
  
  _next = () => {
    let currentStep = this.state.currentStep
    currentStep = currentStep >= 2? 3: currentStep + 1
    this.setState({
      currentStep: currentStep
    })
  }
    
  _prev = () => {
    let currentStep = this.state.currentStep
    currentStep = currentStep <= 1? 1: currentStep - 1
    this.setState({
      currentStep: currentStep
    })
  }

/*
* the functions for our button
*/
previousButton() {
  let currentStep = this.state.currentStep;
  if(currentStep !==1){
    return (
      <button 
        className="btn btn-secondary mt-3" 
        type="button" onClick={this._prev}>
      Previous
      </button>
    )
  }
  return null;
}

nextButton(){
  let currentStep = this.state.currentStep;
  if(currentStep <3){
    return (
      <button 
        className="btn btn-primary float-right mt-3" 
        type="button" onClick={this._next}>
      Next
      </button>        
    )
  }
  return null;
}
  
  render() {    
    return (
        <div className="col-12 card p-3">

      <form onSubmit={this.handleSubmit} >
      {/* 
        render the form steps and pass required props in
      */}
        <Step1 
          currentStep={this.state.currentStep} 
          handleChange={this.handleChange}
          email={this.state.email}
          name={this.state.name}
        />
        <Step2 
          currentStep={this.state.currentStep} 
          handleChange={this.handleChange}
          username={this.state.username}
          password={this.state.password}
          />
        <Step3 
          currentStep={this.state.currentStep} 
          handleChange={this.handleChange}
          aadhaar={this.state.aadhaar}
          phone={this.state.phone}
        />
        {this.previousButton()}
        {this.nextButton()}

      </form>
      </div>
    );
  }
}

function Step1(props) {
  if (props.currentStep !== 1) {
    return null
  } 
    return (
        <React.Fragment>
    <div className="form-group m-3">
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control w-100"
              id="email"
              name="email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              value={props.email}
              onChange={props.handleChange}
            />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Name</label>
            <input
              type="text"
              className="form-control w-100"
              id="name"
              name="name"
              aria-describedby="nameHelp"
              placeholder="Enter name"
              value={props.name}
              onChange={props.handleChange}
            />
        <small id="nameHelp" className="form-text text-muted">We'll never share your name with anyone else.</small>
        </div>

    </div>
      </React.Fragment>
  );
}

function Step2(props) {
  if (props.currentStep !== 2) {
    return null
  } 
  return(
    <React.Fragment>
      <div className="form-group m-3">
          <label htmlFor="username">Username</label>
            <input
              type="text"
              className="form-control w-100"
              id="username"
              name="username"
              placeholder="Enter username"
              value={props.username}
              onChange={props.handleChange}
            />
      </div>
      <div className="form-group m-3">
          <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control w-100"
              id="password"
              name="password"
              aria-describedby="passwordHelp"
              placeholder="Enter password"
              value={props.password}
              onChange={props.handleChange}
            />
        <small id="nameHelp" className="form-text text-muted">We'll never share your details with anyone else.</small>
      </div>
      </React.Fragment>
  );
}

function Step3(props) {
  if (props.currentStep !== 3) {
    return null
  } 
  return(
    <React.Fragment>
    <div className="form-group m-3">
      <label htmlFor="aadhaar">Aadhaar number</label>
      <input
        className="form-control w-100"
          id="aadhaar"
          name="aadhaar"
          type="text"
          placeholder="Enter Aadhaar Number"
          value={props.aadhaar}
          onChange={props.handleChange}
        />      
    </div>
    <div className="form-group m-3">
      <label htmlFor="phone">Phone</label>
      <input
        className="form-control w-100"
          id="phone"
          name="phone"
          type="number"
          placeholder="Enter Phone Number"
          value={props.phone}
          onChange={props.handleChange}
        />      
    </div>
    <button className="btn btn-success float-right mt-3">Sign up</button>
    </React.Fragment>
  );
}