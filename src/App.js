import React, { Component } from 'react';
import Jobs from './image/jobs.jpg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      coord: [],
      skipped: [1, 2, 3, 4, 5, 6, 7, 8]
    }

   this.coord = this.coord.bind(this);
  }

  coord(e) {
    let data = [];
    let obj = document.querySelector('.face');
    let x = e.pageX;
    let y = e.pageY;
    let posX = obj.offsetTop;
    let posY = obj.offsetLeft;
    let left = (x-5)-posY;
    let top = (y-5)-posX;
    let count = this.state.coord.length;
    let skip = this.state.skipped;
    skip.splice(0,1);
    data = (
        <span key={count++} className="coord" style={{left: left+'px', top: top+'px'}}></span>
    );
    this.setState({
      coord: this.state.coord.concat(data),
      skipped: skip
    })
  }

  render() {
    let circle, skipped;
    if(this.state.coord.length < 8) {
      circle = (
        <img className="face-annotation" src={Jobs} alt="Steve Jobs" onClick={(event) => {
          this.coord(event)
        }}/>
      )
    } else {
      circle = (
        <img className="face-annotation" src={Jobs} alt="Steve Jobs" />
      )
    }
    if(this.state.skipped.length) {
      skipped = (
        <p className="skipped">Skipped: {this.state.skipped.map((key, id) => (<span key={id}>{key}</span>))}</p>
      )
    } else {
      skipped = <p className="skipped">You used all the elements</p>;
    }
    return (
      <div className="App">
        <div className="face-container">
            <div className="face">
                {circle}
                {this.state.coord.map((key) => key)}
            </div>
          {skipped}
        </div>
      </div>
    )
  }
}

export default App;
