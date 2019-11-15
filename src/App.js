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
    goal: 10,
    status: ""
  };
  render() {
    return (
      <Container>

        <Navbar expand="lg" variant="dark" bg="dark">
          <Navbar.Brand >Clicky-Game</Navbar.Brand>
          <Nav className="ml-auto">Total Score: {this.state.count}</Nav>
        </Navbar>
        {this.state.peeps.map(person => (
          <Card>
            <img
          id={person.id}
          key={person.id}
          src={person.image}
          alt="brokenimage"/>
          </Card>
        ))}
      </Container>

    );
  }
}
export default App;
