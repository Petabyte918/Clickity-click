import React from "react";
import CovenCard from "./components/CovenCard";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import covencast from "./covencast.json";
import "./App.css";

class App extends React.Component {

  // Sets the this.state.covencast to the covencast JSON array
  // Assigns start message and 0 for the scores
  state = {
    message: "Click an image to start!",
    covencast,
    userScore: 0,
    highScore: 0
  };

  // Restart the game if the user clicks on an image more than once
  restartGame = () => {
    // If the current userScore is higher than the highScore, then set the highScore to the current userScore 
    if (this.state.userScore > this.state.highScore) {
      this.setState({ highScore: this.state.userScore});
    }

    // Restart count to 0 for each character
    this.state.covencast.forEach( character => {
      character.count = 0;
    });

    // Display Game Over message
    this.setState({message: "Game Over!  Try again!"});

    // Reset userScore to 0
    this.setState({userScore: 0});

    return true;
  }

  // clickCounter takes in the id prop (property)
  clickCounter = id => {

    // Changes initial message once an image is clicked on
    this.setState({message: "Don't click on same image more than once!"});

    // Finds a character prop by the position in array (i property)
    this.state.covencast.find((character, i) => {

      if (character.id === id) {

        // If current count of character is 0 then add 1 to the count
        if(covencast[i].count === 0) {
          covencast[i].count = covencast[i].count + 1;

          // Update the userScore by adding 1 to it
          this.setState({ userScore: this.state.userScore + 1});
          
          // Sort the character by random
          this.state.covencast.sort(() => Math.random() - 0.5)

          return true;
        }
        
        else {
          this.restartGame();
        }
      }
    });
  }

  // Map over this.state.covencast and render a CovenCard component for each covencast object
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
