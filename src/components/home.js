import React,{Component} from 'react';
import bg from '../bg.jpeg';
class Home extends Component{
  render(){
     return(
       <div>
       <section><img src={bg} style={{margin:"15px 0 0 0"}} alt="Welcome"></img></section>
       </div>
     );
   }
}
export default Home;
