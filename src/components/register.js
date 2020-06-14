import React, { Component } from "react";
import './login.css';
class register extends Component{
  state={
    name:"",
    nameError:"",
    id:"",
    idError:"",
    pass:"",
    PassError:"",
    dep:"",
    DepError:"",
    year:"",
    YearError:"",
    key:"",
    KeyError:"",
    alread:"",
    login:[]
  };
  componentDidMount(){
    this.getLogin()
  }
  getLogin = _ =>{
    fetch("http://localhost:4000/login")
    .then(response=>response.json())
    .then(response=>this.setState({login:response.data}))
    .catch(err=>console.log(err))
  }
  addUser = _ =>{
    fetch(`http://localhost:4000/register/add?email=${this.state.id}&name=${this.state.name}&pass=${this.state.pass}`)
    .then(response=>response.json())
    .then(this.getLogin)
    .catch(err=>console.error(err))
  }
  NameChange = (event) => {
    let alph=/^[a-zA-Z]+$/
    this.setState({
      name:event.target.value
    })
    if(this.state.name.length<5)
    {
      this.setState({
      NameError:"Username needs to be atleast 5 characters long"
      })
    }
    else if(!(alph.test(this.state.name))){
      this.setState({
      NameError:"Must be an alphabetics only"
      })
    }
    else{
      this.setState({
      NameError:""
      })
      }
    }
  IdChange = (event) => {
    this.setState({
      id:event.target.value
    })
    if(this.state.id.length<5)
    {
      this.setState({
      idError:"Id needs to be atleast 5 characters long"
      })
    }
    else {
      this.setState({
      idError:""
      })
    }
  }
  PassChange = (event) => {
    let passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%&])(?=.{8,})/
    this.setState({
      pass:event.target.value
    })
    if(!(passRegex.test(this.state.pass))){
      this.setState({
        PassError:" Atleast 8 letters have one Alphanumerics & Special Characters "
      })
    }
    else {
      this.setState({
         PassError:""
      })
    }
  }
  submit = () => {
    let error = 0;
    if(this.state.name==="")
    {
      error=1;
      this.setState({
      NameError:"Must Enter Inputs"
      })
    }
    if(this.state.id==="")
    {
      error=1;
      this.setState({
      idError:"Must Enter Inputs"
      })
    }
    if(this.state.pass==="")
    {
      error=1;
      this.setState({
      PassError:"Must Enter Inputs"
      })
    }
    if(error===0)
    {
      this.state.login.map(this.renderLogin = ({i,Name,Email,Pass}) => {
        if(this.state.id===Email)
        {
              error=2;
        }
      });
      if(error===2)
      {
        this.setState({
          already:"Already Exist"
        })
      }
      else {
        this.addUser();
        this.props.start(this.state.name,this.state.id);
        this.props.history.push('./main');
      }
    }
  }
  render(){
     return(
      <div className="bg">
      <div className="form">
         <label className="head">Register</label><br/>
         <span>{this.state.already}</span><br/>
         <label>Name:</label><input type="text" value={this.state.name} onChange={this.NameChange}/><br/><span>{this.state.NameError}</span><br/>
         <label>E-mail:</label><input value={this.state.id} type="text" onChange={this.IdChange}/><br/><span>{this.state.idError}</span><br/>
         <label>Password:</label><input value={this.state.pass} type="password" onChange={this.PassChange}/><br/><span>{this.state.PassError}</span><br/>
         <button className="sum" onClick={this.submit} >Submit</button>
         <p>Already user?<a href="/login">Login</a></p>
       </div></div>
     );
   }
}
export default register;
