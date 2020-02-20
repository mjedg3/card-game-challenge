import React, { Component } from "react";
import Card from "./components/Card";
import "./App.css";
import Mavicair from "./images/mavicair.png";
import Maviczoompro from "./images/maviczoompro.jpg";
import Ronin from "./images/ronin.jpg";
import Phantom4 from "./images/phantom4.jpg";
import Spark from "./images/spark.jpg";
import Robomaster from "./images/robomaster.jpg";
import Mavic2Pro from "./images/mavic2pro.jpg";
import Osmopocket from "./images/osmopocket.jpg";

class App extends Component {
  state = {
    message: "match the cards to win the game",
    cards: [
      { flipped: false, image: Mavicair },
      { flipped: false, image: Maviczoompro },
      { flipped: false, image: Ronin },
      { flipped: false, image: Phantom4 },
      { flipped: false, image: Spark },
      { flipped: false, image: Robomaster },
      { flipped: false, image: Mavic2Pro },
      { flipped: false, image: Osmopocket },
      { flipped: false, image: Ronin },
      { flipped: false, image: Mavic2Pro },
      { flipped: false, image: Spark },
      { flipped: false, image: Maviczoompro },
      { flipped: false, image: Osmopocket },
      { flipped: false, image: Robomaster },
      { flipped: false, image: Phantom4 },
      { flipped: false, image: Mavicair }
    ],
    firstFlip: null,
    secondFlip: null
  };

  flipHandler = index => {
    if (this.state.firstFlip == null) {
      let newCards = this.state.cards;
      newCards[index].flipped = true;
      this.setState({ cards: newCards, firstFlip: index });
    } else if (this.state.secondFlip == null) {
      let newCards = this.state.cards;
      newCards[index].flipped = true;
      this.setState({ cards: newCards, secondFlip: index });
    }
  };

  //this is a React Lifecycle method - read the docs
  componentDidUpdate() {
    //object destructuring so I don't have to keep typing this.state.
    const { firstFlip, secondFlip, cards } = this.state;

    if (firstFlip != null && secondFlip != null) {
      //handle match
      if (cards[firstFlip].image === cards[secondFlip].image) {
        console.log("its a match");
        this.setState({ firstFlip: null, secondFlip: null });
        //handle mismatch
      } else if (cards[firstFlip].image !== cards[secondFlip].image) {
        setTimeout(() => {
          let newCards = this.state.cards;
          newCards[firstFlip].flipped = false;
          newCards[secondFlip].flipped = false;
          this.setState({ cards: newCards, firstFlip: null, secondFlip: null });
        }, 1500);
      }
      this.winningLogic();
    }
  }

  winningLogic = () => {
    // write a function that determines a winner (every card is turned over)
    // there's an array method called -every- which you might want to look up.
    //you then need to decided where the best place to call this method is.
  };

  render() {
    return (
      <div className="board">
        {this.state.cards.map((card, index) => {
          return (
            <Card
              key={index}
              image={card.image}
              flipped={card.flipped}
              click={() => this.flipHandler(index)}
            />
          );
        })}
        <p>{this.state.message}</p>
        <p>{`Turns: ${this.state.turns}`}</p>
      </div>
    );
  }
}

export default App;
