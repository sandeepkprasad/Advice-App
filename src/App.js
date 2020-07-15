import React, {Component} from 'react';
import './App.css';
import axios from "axios";

class App extends React.Component {
  state = {advice: " "};

  componentDidMount() { // Sync function.
    this.fetchAdvice();
  }

  fetchAdvice = () => {
    axios.get("https://api.adviceslip.com/advice") // Getting data from API.
    .then((response) => {
      const {advice} = response.data.slip;
      this.setState({advice: advice});
    })
    .catch((error) => {
      console.log(error);
    });
  }

  render() {
    return(
      <div className="app">
        <div className="card">
          <h1 className="heading">{this.state.advice}</h1>
          <button className="button" onClick={this.fetchAdvice}><span>Want more advice!</span></button>
        </div>
      </div>
    );
  }
}
export default App;
