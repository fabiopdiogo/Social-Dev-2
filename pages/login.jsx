import styled from "styled-components"
import ImageWithSpace from "../src/components/layout/ImageWithSpace"
import Link from 'next/link'
import { joiResolver } from '@hookform/resolvers/joi'
import axios from 'axios'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'

import { loginSchema } from '../modules/user/user.schema'

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

function Login(){
  const router = useRouter()
  const {control, handleSubmit, formState: { errors }, setError} = useForm({
    resolver: joiResolver(loginSchema)
  })

  const onSubmit = async (data) => {
    try{
      const { status } = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/user/login`, data)
      if (status === 200){
        router.push('/')
      }
    } catch ({response}) {
      if(response.data === 'password incorrect'){
        setError('password',{
          message: 'A senha está incorreta.'
        })
      }
      else if (response.data === 'not found'){
        setError('userOrEmail',{
          message: 'Usuário ou e-mail não encontrado.'
        })
      }
      
    }
  }
  return(
    <ImageWithSpace>     
      <Title>#Social Dev</Title>
      <Subtitle>Tudo o que acontece no mundo dev, está aqui!</Subtitle>
      <FormContainer>
        <H2>Entre em sua conta</H2>
        <Form onSubmit={handleSubmit(onSubmit)}>
        <Input label="Email ou usuário" name="userOrEmail" control={control}/>
          <Input label="Senha" type="password" name="password" control={control}/>
          <Button type="submit" disabled={Object.keys(errors).length > 0}>Entrar</Button>
        </Form>
        <Text>Não possui uma conta? <Link href="/signup">Faça seu cadastro</Link></Text>
      </FormContainer>
    </ImageWithSpace>
  )
}

export default Login