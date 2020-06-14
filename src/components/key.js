import React,{Component} from 'react';
import './profile.css';
class Key extends Component{
  render(){

     return(
      <div className="bg">
      <div className="form">
         <label className="head">API-Key</label><br/>
         <label>Your api-key:</label><input type="text" /><br/><span></span><br/>
       </div></div>
     );
   }
}
export default Key;
