import {
  GameContainer,
  GameButton,
  GameImage,
  ResultContainer,
  ResultName,
  ResultText,
  ResultButton,
} from './styledComponents'

const GameCard = props => {
  const {choicesList, gameStart, myArray, text, playAgain, result} = props

  const onClickPlayAgain = () => {
    playAgain()
  }

  return (
    <GameContainer>
      {gameStart ? (
        <>
          <GameButton
            type="button"
            data-testid="rockButton"
            onClick={() => result(choicesList[0].id)}
          >
            <GameImage
              src={choicesList[0].imageUrl}
              alt={choicesList[0].id}
              key={choicesList[0].id}
            />
          </GameButton>
          <GameButton
            type="button"
            data-testid="scissorsButton"
            onClick={() => result(choicesList[1].id)}
          >
            <GameImage
              src={choicesList[1].imageUrl}
              alt={choicesList[1].id}
              key={choicesList[1].id}
            />
          </GameButton>
          <GameButton
            type="button"
            data-testid="paperButton"
            onClick={() => result(choicesList[2].id)}
          >
            <GameImage
              src={choicesList[2].imageUrl}
              alt={choicesList[2].id}
              key={choicesList[2].id}
            />
          </GameButton>
        </>
      ) : (
        <>
          <ResultContainer>
            <ResultName>YOU</ResultName>
            <GameImage src={myArray[0].imageUrl} alt="your choice" />
          </ResultContainer>
          <ResultContainer>
            <ResultName>OPPONENT</ResultName>
            <GameImage src={myArray[1].imageUrl} alt="opponent choice" />
          </ResultContainer>
          <ResultContainer>
            <ResultText>{text}</ResultText>
            <ResultButton type="button" onClick={onClickPlayAgain}>
              PLAY AGAIN
            </ResultButton>
          </ResultContainer>
        </>
      )}
    </GameContainer>
  )
}
export default GameCard
