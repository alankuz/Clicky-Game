import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Container } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Component } from "react";
import peeps from './People.json'



class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    peeps,
    clickedIds: [],
    score: 0,
    highScore: 0,
    status: ""
  };
  shuffler = id => {
    let clickedIds = this.state.clickedIds;

    if (clickedIds.includes(id)) {
      let CS = this.state.score;
      let HS = this.state.highScore;
      console.log(HS)
      if (CS > HS) {
        this.setState({ highScore: [CS] })
      }
      this.setState({ clickedIds: [], score: 0, status: "Game Over! You lost. Click to play again!" });
      return;
    } else {
      clickedIds.push(id)

      this.setState({ peeps, clickedIds, score: clickedIds.length, status: " " });

      for (let i = peeps.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [peeps[i], peeps[j]] = [peeps[j], peeps[i]];
      }
    }
  }
  render() {
    return (
      <Container>

        <Navbar expand="lg" variant="dark" bg="dark">
          <Navbar.Brand >FlapJack Clicky-Game</Navbar.Brand>
          <Nav className="ml-auto scores">Total Score: {this.state.score} Highscore: {this.state.highScore} </Nav>
        </Navbar>
        {this.state.peeps.map(person => (
          <Card className="shuffleScore">
            <img
              shuffler={this.shuffler}
              id={person.id}
              key={person.id}
              src={person.image}
              alt="brokenimage"
              onClick={() => this.shuffler(person.id)} className='shuffleScore' />
          </Card>
        ))}
      </Container>

    );
  }
}
export default App;
