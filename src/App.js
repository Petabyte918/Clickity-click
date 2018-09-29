import React from "react";
import CovenCard from "./components/CovenCard";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import covencast from "./covencast.json";
import "./App.css";

class App extends React.Component {

  state = {covencast};

  render() {
  return <Wrapper>
    <Header>Clickity-Click!</Header>
    {this.state.covencast.map(item => (
      <CovenCard
        name={item.name}
        image={item.image}
      />
    ))}
  </Wrapper>
  }
}

export default App;
