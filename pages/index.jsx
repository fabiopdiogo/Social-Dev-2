import  { useEffect, useState } from 'react'
import { withIronSessionSsr } from 'iron-session/next'
import axios from 'axios'
import useSWR from 'swr'
import { ironConfig } from '../lib/middlewares/ironSession'

import styled from "styled-components"
import Navbar from "../src/components/layout/Navbar"
import Container from "../src/components/layout/Container"
import CreatePost from "../src/components/cards/CreatePost"
import Post from "../src/components/cards/Post"
import H3 from "../src/components/typography/H3"

const Content = styled.div`
  margin: 50px 0;
`

const LastPostText = styled(H3)`
  padding: 30px 0;
`

const RefreshPosts =styled.span`
  font-weight: bold;
  color: ${props => props.theme.primary};
  cursor: pointer;
`
const RefreshPostsContainer = styled.div`
  text-align: center;
  margin-bottom: 20px;
`
const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`
const fetcher = url => axios.get(url).then(res => res.data)

function HomePage({ user }){
  const { data } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/api/post`, fetcher)
  return(
    <>
      <Navbar />
      <Content>
        <Container>
          <CreatePost username={user.user}/>
          <LastPostText>Últimas postagens</LastPostText>
          <RefreshPostsContainer>
            <RefreshPosts>Carregar novas postagens</RefreshPosts>
          </RefreshPostsContainer>
          <PostContainer>
              {
                data?.map(post => 
                  <Post 
                    key={post._id}
                    text={post.text}
                    user={post.createdBy.user}
                    date={post.createdDate}
                    isOwner={post.createdBy._id === user.id}
                    id={post._id}
                  />
                )
              }
          </PostContainer>
        </Container>

      </Content>
    </>
  )
}

export const getServerSideProps =  withIronSessionSsr(
  async function gettServerSideProps({ req }){
    const user = req.session.user

    if (!user) {
      return{
        redirect: {
          permanent: false,
          destination: '/login'
        }
      }
    }    

    return{
      props: {
        user
      }
    }
  },
  ironConfig
)

export default HomePage