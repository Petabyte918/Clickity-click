import React from "react";
import CovenCard from "./components/CovenCard";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import covencast from "./covencast.json";
import "./App.css";

class App extends React.Component {

  state = {
    message: "Click an image to start!",
    covencast,
    userScore: 0,
    highScore: 0
  };

  restartGame = () => {
    if (this.state.userScore > this.state.highScore) {
      this.setState({ highScore: this.state.userScore}, function() {
        console.log(this.state.highScore);
      });
    }

    this.state.covencast.forEach( character => {
      character.count = 0;
    });

    this.setState({message: "Game Over!  Try again!"});
    this.setState({userScore: 0});
    return true;
  }

  clickCounter = id => {

    this.state.covencast.find((character, i) => {

      if (character.id === id) {

        if(covencast[i].count === 0) {
          covencast[i].count = covencast[i].count + 1;
          this.setState({ userScore: this.state.userScore + 1}, function() {
            console.log(this.state.userScore);
          });

          this.state.covencast.sort(() => Math.random() - 0.5)

          return true;

        }
        
        else {
          this.restartGame();
        }
      }
    });
  }

  render() {
  return <Wrapper>
    <Header userScore={this.state.userScore} highScore={this.state.highScore} message={this.state.message}>Clickity-Click!</Header>
    {this.state.covencast.map(character => (
      <CovenCard
        clickCounter={this.clickCounter}
        id={character.id}
        name={character.name}
        image={character.image}
        key={character.id}
      />
    ))}
  </Wrapper>
  }
}

export default App;
