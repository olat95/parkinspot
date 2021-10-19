import React from 'react'
import { Button } from '../ButtonElement'

import {
  Container,
  ServiceWrapper,
  Row,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  Content,
  BtnWrapper,
  Column2,
  ImgWrap,
  Img,
} from './ServiceElement'

const Services = ({
  id,
  lightBg,
  imgStart,
  topLine,
  lightText,
  headLine,
  darkText,
  desc,
  buttonLabel,
  img,
  alt,
  primary,
  dark,
  dark2,
}) => {
  return (
    <Container lightBg={lightBg} id={id}>
      <ServiceWrapper>
        <Row imgStart={imgStart}>
          <Column1>
            <TextWrapper>
              <TopLine>{topLine}</TopLine>
              <Heading lightText={lightText}>{headLine}</Heading>
              <Content darkText={darkText}>{desc}</Content>
              <BtnWrapper>
                <Button
                  to=''
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                  primary={primary ? 1 : 0}
                  dark={dark ? 1 : 0}
                  dark2={dark2 ? 1 : 0}
                >
                  {buttonLabel}
                </Button>
              </BtnWrapper>
            </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrap>
              <Img src={img} alt={alt} />
            </ImgWrap>
          </Column2>
        </Row>
      </ServiceWrapper>
    </Container>
  )
}

export default Services
