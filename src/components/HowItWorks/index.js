import React from 'react'
import icon1 from '../../images/icon1.svg'
import icon2 from '../../images/icon2.svg'
import icon3 from '../../images/icon3.svg'
import {
  Container,
  TitleWrapper,
  Title,
  OptionWrapper,
  OptionItem,
  Image,
  Subtitle,
  Desc,
} from './WorkingsElement'

const Features = () => {
  return (
    <Container id='workings'>
      <TitleWrapper>
        <Title>Get started in simple steps</Title>
      </TitleWrapper>
      <OptionWrapper>
        <OptionItem>
          <Image src={icon1} alt='homesearch icon' />
          <Subtitle>
            search for the closest home in your current location
          </Subtitle>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            maiores ipsum neque, reiciendis beatae tempore?
          </Desc>
        </OptionItem>
        <OptionItem>
          <Image src={icon2} alt='apply icon' />
          <Subtitle>apply for the parking spot.</Subtitle>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            maiores ipsum neque, reiciendis beatae tempore?
          </Desc>
        </OptionItem>
        <OptionItem>
          <Image src={icon3} alt='parking icon' />
          <Subtitle>park at the designated area</Subtitle>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            maiores ipsum neque, reiciendis beatae tempore?
          </Desc>
        </OptionItem>
      </OptionWrapper>
    </Container>
  )
}

export default Features
