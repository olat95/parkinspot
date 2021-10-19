import React from 'react'
import Icon1 from '../../images/svg-2.svg'
import Icon2 from '../../images/svg-3.svg'
import Icon3 from '../../images/svg-4.svg'

import {
  Container,
  Title,
  Wrapper,
  OfferCards,
  OfferIcon,
  Subtitle,
  Desc,
} from './OfferElement'

const Offers = () => {
  return (
    <Container id='offers'>
      <Title>Our Services</Title>
      <Wrapper>
        <OfferCards>
          <OfferIcon src={Icon1} />
          <Subtitle>reduce expenses</Subtitle>
          <Desc>we reduce our fees and ensure the safety of your vehicle</Desc>
        </OfferCards>
        <OfferCards>
          <OfferIcon src={Icon2} />
          <Subtitle>reduce expenses</Subtitle>
          <Desc>we reduce our fees and ensure the safety of your vehicle</Desc>
        </OfferCards>
        <OfferCards>
          <OfferIcon src={Icon3} />
          <Subtitle>reduce expenses</Subtitle>
          <Desc>we reduce our fees and ensure the safety of your vehicle</Desc>
        </OfferCards>
      </Wrapper>
    </Container>
  )
}

export default Offers
