import { Component } from "react";

export class ClassTrafficLight extends Component {
  state = { light: 'red'};

  nextState = () => {
    const lightColors: string[] = ['red', 'green', 'yellow'];
    const currentLight = lightColors.indexOf(this.state.light);
    const nextLight = (currentLight + 1) % lightColors.length;
    this.setState({light: lightColors[nextLight]})
  };

  render() {
    return (
      <div className="traffic-light-box">
        <h2>Class Traffic Light</h2>
        <div className="traffic-light">
          <div className={`circle ${this.state.light === 'red' ? 'red' : 'black'}`}></div>
          <div className={`circle ${this.state.light === 'yellow' ? 'yellow' : 'black'}`}></div>
          <div className={`circle ${this.state.light === 'green' ? 'green' : 'black'}`}></div>
        </div>
        <button className="next-state-button" onClick={this.nextState}>Next State</button>
      </div>
    );
  }
}
