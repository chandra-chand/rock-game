import {Component} from 'react'

import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import {RiCloseLine} from 'react-icons/ri'

import GameCard from '../GameCard'
import Navbar from '../Navbar'

import {MainContainer, Rules, PopupImage, Pop} from './styledComponents'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class Game extends Component {
  state = {
    gameStart: true,
    myArray: [choicesList[0], choicesList[1]],
    text: 'YOU WON',
    score: 0,
  }

  playAgain = () => {
    this.setState({gameStart: true})
  }

  getResult = (image1, image2) => {
    if (image1.id === 'ROCK') {
      switch (image2.id) {
        case 'PAPER':
          return 'YOU LOSE'
        case 'SCISSORS':
          return 'YOU WON'
        default:
          return 'IT IS DRAW'
      }
    } else if (image1.id === 'PAPER') {
      switch (image2.id) {
        case 'ROCK':
          return 'YOU WON'
        case 'SCISSORS':
          return 'YOU LOSE'
        default:
          return 'IT IS DRAW'
      }
    } else {
      switch (image2.id) {
        case 'PAPER':
          return 'YOU WON'
        case 'SCISSORS':
          return 'YOU LOSE'
        default:
          return 'IT IS DRAW'
      }
    }
  }

  result = id => {
    const {score} = this.state
    const random = choicesList[Math.floor(Math.random() * choicesList.length)]
    const me = choicesList.filter(each => each.id === id)
    const gameResult = this.getResult(me[0], random)

    let newScore = score

    if (gameResult === 'YOU WON') {
      newScore = score + 1
    } else if (gameResult === 'YOU LOSE') {
      newScore = score - 1
    } else {
      newScore = score
    }
    this.setState({
      gameStart: false,
      myArray: [me[0], random],
      text: gameResult,
      score: newScore,
    })
  }

  render() {
    const {gameStart, myArray, text, score} = this.state

    return (
      <MainContainer>
        <Navbar score={score} />
        <GameCard
          choicesList={choicesList}
          text={text}
          gameStart={gameStart}
          myArray={myArray}
          playAgain={this.playAgain}
          result={this.result}
        />
        <Rules>
          <Popup modal trigger={<button type="button">RULES</button>}>
            {close => (
              <Pop>
                <button type="button" onClick={() => close()}>
                  <RiCloseLine />
                </button>
                <PopupImage
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  alt="rules"
                />
              </Pop>
            )}
          </Popup>
        </Rules>
      </MainContainer>
    )
  }
}
export default Game
