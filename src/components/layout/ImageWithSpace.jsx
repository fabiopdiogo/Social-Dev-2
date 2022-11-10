import styled from "styled-components"
import theme from "../../theme"

const WIDTH_BREAK = '700px'

const Core = styled.p`
  display:flex;
`

const Image = styled.div`
  display: flex;
  background-image: url('/coffee-background.jpg');
  background-position: right;
  background-repeat: no-repeat;
  background-size: cover;

  width: 60%;
  height: 100vh;

  @media(max-width: ${WIDTH_BREAK}){
    display: none;
  }
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 50px;

  @media (min-width: ${WIDTH_BREAK}){
    min-width: calc(${WIDTH_BREAK} - 100px);
  }

  @media (max-width: ${WIDTH_BREAK}){
    width: 100%
  }

  display: flex;
  flex-direction: column;

  height: calc(100vh - 60px);
  overflow-y: auto;

  &:before, &:after{
    content: '';
    margin: auto;
  }
`

function ImageWithSpace({children}){
  return(
    <Core>
      <Image />
      <Container>
        {children}
      </Container>
    </Core>
  )
}

export default ImageWithSpace