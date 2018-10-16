import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Cards from "./components/Cards";
import Title from "./components/Title";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import babyanimals from "./babyanimals.json";
import { Container, Row } from 'react-grid-system';

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
    } else{
      this.handleGameReset();
    }
  };

  handleScore = () => {
    const addScore = this.state.score + 1;
    this.setState({
      score:addScore,
    })
    
     if (addScore < 12 && addScore >= this.state.topScore){
       console.log("score is:" + addScore);
      this.setState({
        topScore:addScore
      })
    }
    else if (addScore === 12){
      console.log(addScore);
      this.setState({
        correctOrNot: "You Win!",
        topScore:3,
        score:0
      });
      // this.handleGameReset();
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
      correctOrNot:"Oops, that's incorrect!",
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
      <Title>Test your memory with this game! Click on each of the images only once and score a point! Click twice, and its back to the start.Noone said memory building was easy.
      </Title>

      <Container>
          <Row>
            {this.state.babyanimals.map(baby => (
              // <Col sm={3}>
                <Cards
                  id={baby.id}
                  key={baby.id}
                  image={baby.image}
                  name={baby.name}
                  handleClickEvent={this.handleClickEvent}
                  handleShuffle={this.handleShuffle}
                  handleGameReset={this.handleGameReset}
            
                />
              /* </Col> */
            ))}
            
          </Row>
      </Container>
      </Wrapper>
    //  </div>

    );
  }
}

export default App;
