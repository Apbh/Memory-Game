import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Cards from "./components/Cards";
import Title from "./components/Title";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import babyanimals from "./babyanimals.json";
import { Container, Row, Col } from 'react-grid-system';

function shuffleCards(array){
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; 
}
  return array;
}
class App extends Component {
  state = {
    babyanimals,
    score: 0,
    topScore: 0,
    clicked :[],
    correctOrNot: ""

  };
  handleClickEvent = (id) => {
    if (this.state.clicked.indexOf(id) === -1){
      this.setState({
        clicked:this.state.clicked.concat(id),
        correctOrNot:"Good Memory!"
      
      });
      this.handleScore();
      // this.handleShuffle();
    } else{
      // this.setState({correctOrNot:"SHIH-TZU, you guessed incorrectly!"})
      this.handleGameReset();
    }
  };

  handleScore = () => {
    const score = this.state.score + 1;
    this.setState({
      topScore:score,
    })
    
    if (this.state.score < 12){
      this.setState({
        score:score,
        // topScore:this.state.score,
      })
    }
    else if (this.state.score === 12){
      this.setState({
        correctOrNot: "You Win!"
      });
      this.handleGameReset();
    }
    this.handleShuffle();

  }

  handleShuffle = () => {
    let cardShuffle = shuffleCards(babyanimals);
    this.setState({babyanimals: cardShuffle});
  };


  handleGameReset = () => {
    this.setState({
      babyanimals,
      score:0,
      topScore: this.state.score,
      correctOrNot:"SHIH-TZU, that's incorrect!",
      clicked: [],
      
    })
    this.handleShuffle();
  }


  render() {
    return (
    //  <div className= "container-fluid">
      <Wrapper>
      <Navbar
      score= {this.state.score}
      correctOrNot={this.state.correctOrNot}
      topScore = {this.state.topScore}
      />
      <Title>Test your memory with this game! Click on each of the images only once and score a point! Click twice, and its back to the start. Noone said building memory was easy.
      </Title>

      <Container>
          <Row>
            {this.state.babyanimals.map(baby => (
              <Col sm={3}>
                <Cards
                  id={baby.id}
                  key={baby.id}
                  image={baby.image}
                  name={baby.name}
                  handleClickEvent={this.handleClickEvent}
                  handleShuffle={this.handleShuffle}
                  handleGameReset={this.handleGameReset}
            
                />
              </Col>
            ))}
            
          </Row>
      </Container>
      </Wrapper>
    //  </div>

    );
  }
}

export default App;
