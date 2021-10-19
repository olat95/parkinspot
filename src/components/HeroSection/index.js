import React, { useState } from 'react'
import {
  Container,
  Left,
  Title,
  Right,
  Desc,
  ButtonArea,
  VideoBg,
  ArrowForward,
  ArrowRight,
} from './HeroElements'
import Video from '../../videos/video.mp4'
import AnimatedShapes from '../Animations'
import { Button } from '../ButtonElement'

const HeroSection = () => {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }

  return (
    <Container id='home'>
      <Left>
        <AnimatedShapes />
        <Title>we connect you to the closest location, security assured!</Title>
        <Desc>
          Going to an area where you don't know anybody. You need an assurance
          that wherever your automobile is packed, it is safe from{' '}
          <strong>
            <i>fines</i>
          </strong>{' '}
          and{' '}
          <strong>
            <i>theft</i>
          </strong>
          . We help you connect to the nearest location with ease and secure
          your automobile.
        </Desc>
        <ButtonArea>
          <Button
            to='/signup'
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary='true'
            dark='true'
          >
            Join us by Signing up {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </ButtonArea>
      </Left>
      <Right>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </Right>
    </Container>
  )
}

export default HeroSection
