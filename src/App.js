import React, { Component } from 'react';
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
      this.handleScore();
      this.setState({
        clicked:this.state.clicked.concat(id),
        
      });
    } else{
      this.setState({
          correctOrNot: "Oops, that's incorrect!",
        })
        this.handleGameReset();
      }
      this.handleShuffle();
    };
    
    handleScore = () => {
      const addScore = this.state.score + 1;
      this.setState({
        score:addScore,
        correctOrNot:"Good Memory!"
      })
      
      if (addScore < 12 && addScore >= this.state.topScore){
        console.log("score is:" + addScore);
        this.setState({
          topScore:addScore,
        })
      }
     if (addScore === 12){
      this.setState({
        score:this.state.score,
        topScore:4,
        clicked:this.state.clicked
    
      }, function(){
        this.handleWin();
        this.setState({
          score:0,
          topScore:0,
          clicked:[]
        })
      });
    }
    console.log(this.state.clicked);
  }
  
  
  
  handleGameReset = () => {
    console.log(this.state.topScore);
    this.setState({
      babyanimals,
      clicked: [],
      score:0,
      
    })
    this.handleShuffle();
  }

  handleWin = () => {
    this.setState({
      correctOrNot: "Winner! Click a card to replay.",
    })
  }
  
  
    handleShuffle = () => {
      let cardShuffle = shuffleCards(babyanimals);
      this.setState({babyanimals: cardShuffle});
    };

  render() {
    return (
  
      <Wrapper>
      <Navbar
      score= {this.state.score}
      correctOrNot={this.state.correctOrNot}
      topScore = {this.state.topScore}
      />
      <Title>Test your memory with this game! Click on a card below only once and score a point! Click twice, and your score resets to 0. To win, you must click on all 12 cards once. Noone said memory building was easy.
      </Title>

      <Container>
          <Row>
            {this.state.babyanimals.map(baby => (
              
                <Cards
                  id={baby.id}
                  key={baby.id}
                  image={baby.image}
                  name={baby.name}
                  handleClickEvent={this.handleClickEvent}
                  handleShuffle={this.handleShuffle}
                  handleGameReset={this.handleGameReset}
            
                />
            ))}
            
          </Row>
      </Container>
      </Wrapper>
  

    );
  }
}

export default App;
