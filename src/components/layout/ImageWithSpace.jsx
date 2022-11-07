import styled from "styled-components"
import theme from "../../theme"

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
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-image: ${props => props.theme.white};
  padding: 30px 50px;
  height: calc(100vh - 60px);
  overflow-y: auto;
  width: 50%;
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