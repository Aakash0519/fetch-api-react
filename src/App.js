import React, { Component } from 'react'
import axios from 'axios'
import './App.css'

export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       advice:''
    }
  }
  componentDidMount(){
    this.fetchAdvice();    
  }
  
  fetchAdvice = () => {
     axios.get("https://api.adviceslip.com/advice")
      .then((res)=>{
      const {advice} = res.data.slip;
        this.setState({advice});
        
      })
      .catch((err) => {
        console.log(err);
        
      });
  }

  render() {
    return (
      <>
       <div className = "app">    
         <div className="card">
           <h1 className="heading">{this.state.advice}</h1>
           <button id = "butt" onClick ={this.fetchAdvice}>
             <span>GIVE ME ADVICE !</span>
           </button>
         </div>
       </div>
       </>
    )
  }
}

export default App
