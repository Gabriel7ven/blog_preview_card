import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Container } from './styles'
import { Card } from './styles'
import { Header } from './styles'
import { BannerImage } from './styles'
import { Button } from './styles'
import { Published } from './styles'
import { Title } from './styles'
import { Article } from './styles'



function App() {
  

  return (
    <>
      <Container>
        <Card>
          <BannerImage src="/illustration-article.svg" alt="banner" />
          <Button>
            Learning
          </Button>
          <Published>
            Published 21 Dec 2023
          </Published>
          <Title>HTML & CSS foundations</Title>
          <Article>These languages are the backbone of every website, defining structure, content, and presentation.</Article>
        </Card>
      </Container>


      

      HTML & CSS foundations

      

      Greg Hooper
      
      <div class="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="#">Your Name Here</a>.
      </div>

    </>
  )
}

export default App
