import {
  NavbarContainer,
  HeadContainer,
  Head,
  ScoreContainer,
  ScoreHead,
  Score,
} from './styledComponents'

const Navbar = props => {
  const {score} = props

  return (
    <NavbarContainer>
      <HeadContainer>
        <Head>
          ROCK <br />
          PAPER
          <br />
          SCISSORS
        </Head>
      </HeadContainer>
      <ScoreContainer>
        <ScoreHead>Score</ScoreHead>
        <Score>{score}</Score>
      </ScoreContainer>
    </NavbarContainer>
  )
}
export default Navbar
