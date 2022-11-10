import styled from "styled-components"
import ImageWithSpace from "../src/components/layout/ImageWithSpace"
import Link from 'next/link'

import H1 from "../src/components/typography/H1"
import H2 from "../src/components/typography/H2"
import H3 from "../src/components/typography/H3"
import H4 from "../src/components/typography/H4"
import Input from "../src/components/inputs/Input"
import Button from "../src/components/inputs/Button"

const Title = styled.p`
  font-size: 70px;
  font-weight: bold;
`
const Subtitle = styled.p`
  font-size: 25px;
  font-weight: bold;
`
const FormContainer = styled.div`
  margin-top: 60px;
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  gap: 20px;
`
const Text =styled.p`
  text-align: center;
`

function SignUp(){
  return(
    <ImageWithSpace>     
      <Title>#Social Dev</Title>
      <Subtitle>Tudo o que acontece no mundo dev, está aqui!</Subtitle>
      <FormContainer>
        <H2>Crie sua conta</H2>
        <Form>
          <Input label="Nome"/>
          <Input label="Sobrenome"/>
          <Input label="Usuário"/>
          <Input label="Email ou usuário"/>
          <Input label="Senha"/>
          <Button type="submit">Cadastrar</Button>
        </Form>
        <Text>Já possui uma conta? <Link href="/login">Faça seu login</Link></Text>
      </FormContainer>
    </ImageWithSpace>
  )
}

export default SignUp