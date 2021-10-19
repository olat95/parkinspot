import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Features from '../components/HowItWorks'
import Services from '../components/Services'
import {
  homeObjOne,
  homeObjThree,
  homeObjTwo,
} from '../components/Services/Data'
import Offers from '../components/Offers'
import Footer from '../components/Footer'

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
`

const Shape = css`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`

const FeatureShape = styled.div`
  ${Shape}
  background-color: #ecf0f1;
  clip-path: polygon(0 0, 39% 0, 46% 100%, 0% 100%);
`

const AnotherShape = styled.div`
  ${Shape};
  background-color: crimson;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 8% 50%);
`

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Container>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <HeroSection />
      </Container>
      <Container>
        <Features />
        <FeatureShape />
      </Container>
      <Container>
        <Services {...homeObjOne} />
        <AnotherShape />
      </Container>
      <Container>
        <Services {...homeObjTwo} />
        <FeatureShape />
      </Container>
      <Container>
        <Services {...homeObjThree} />
        <AnotherShape />
      </Container>
      <Container>
        <Offers />
      </Container>
      <Footer />
    </>
  )
}

export default Home
