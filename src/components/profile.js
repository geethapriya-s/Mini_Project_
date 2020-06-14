import React,{Component} from 'react';
import './profile.css';
class Profile extends Component{
  render(){

     return(
      <div className="bg">
      <div className="form">
         <label className="head">User - Profile</label><br/>
         <label>Name:</label><input type="text" /><br/><span></span><br/>
         <label>User-Id:</label><input type="text" /><br/><span></span><br/>
         <label>Password:</label><input type="text" /><br/><span></span><br/>
         <label>Department:</label><input type="text" /><br/><span></span><br/>
         <label>Year:</label><input type="text" /><br/><span></span><br/>
         <label>Key:</label><input type="text" /><br/><span></span><br/>
         <label>Mail:</label><input type="text" /><br/><span></span><br/>
         <button className="sum"  >Update</button>
       </div></div>
     );
   }
}
export default Profile;
