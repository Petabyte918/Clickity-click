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

  componentDidMount() {

  }

  gameOver = () => {
    if (this.state.userScore > this.state.highScore) {
      this.setState({ highScore: this.state.userScore}, function() {
        console.log(this.state.highScore);
      });
    }
    this.state.covencast.forEach( covencast => {
      covencast.count = 0;
    });
    alert(`Game Over! \nscore: ${this.state.userScore}`);
    this.setState({userScore: 0});
  }

  clickCounter = id => {
    this.state
  }








  render() {
  return <Wrapper>
    <Header>Clickity-Click!</Header>
    {this.state.covencast.map(character => (
      <CovenCard
        clickCounter={this.clickCount}
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
