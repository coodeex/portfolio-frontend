import React from "react";
import Login from "./Login";
import Game from "./Game";
// import Navbar from "./Navbar";
import EndGame from "./EndGame";

class Main extends React.Component {
  state = {
    showLogin: true,
    showEndGame: true,//false
    name: "",
    score: 0,
  };

  handleLogin = (name, boolean) => {
    this.setState({ name: name, showLogin: boolean });
  };

  handleEndGame = (boolean) => {
    if (boolean) {
      this.setState({ showEndGame: boolean, score: this.state.score + 1 });
    } else {
      this.setState({ showEndGame: boolean });
    }
  };
  render() {
    // const { showLogin, name, score, showEndGame } = this.state;
    const { showLogin, showEndGame } = this.state;
    return (
      <div>
        {showLogin ? <Login name={this.handleLogin} /> 
        : showEndGame ? <EndGame newGame={this.handleEndGame} /> : 
        <Game endGame={this.handleEndGame} />}
        {/* {showEndGame ? <EndGame newGame={this.handleEndGame} /> : null} */}
        {/* <Navbar name={name} score={score} /> */}
        
        {/* {showLogin ? <Login name={this.handleLogin} /> : <Game endGame={this.handleEndGame} />}
        {showEndGame ? <EndGame newGame={this.handleEndGame} /> : null}
        <Navbar name={name} score={score} /> */}
      </div>
    );
  }
}

export default Main;
