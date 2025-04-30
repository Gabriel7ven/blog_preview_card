import { useState } from 'react'
import { Container } from './styles'
import { Card } from './styles'
import { Header } from './styles'
import { BannerImage } from './styles'
import { Button } from './styles'
import { Published } from './styles'
import { Title } from './styles'
import { Article } from './styles'
import { Footer } from './styles'
import { Avatar } from './styles'
import { Name } from './styles'
import { Attribution } from './styles'

function App() {
  

  return (
    <>
      <Container>
        <Card>
          <BannerImage src="/images/illustration-article.svg" alt="banner" />
          <Button>
            Learning
          </Button>
          <Published>
            Published 21 Dec 2023
          </Published>
          <Title>HTML & CSS foundations</Title>
          <Article>These languages are the backbone of every website, defining structure, content, and presentation.</Article>
          <Footer>
            <Avatar src="images/image-avatar.webp"/>
            <Name>Greg Hooper</Name>
          </Footer>
        </Card>
        <Attribution>
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
          Coded by <a href="https://www.linkedin.com/in/gabrie7santos/">Gabriel Santos</a>.
        </Attribution>
      </Container>
    </>
  )
}

export default App
