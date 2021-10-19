import styled from 'styled-components'
import bg from '../../images/background.png'

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${bg});

  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`

export const Wrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`

export const OfferCards = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2)
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`

export const OfferIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`

export const Title = styled.h1`
  font-size: 80px;
  font-family: gluten;
  color: #fff;
  margin-bottom: 64px;

  @media screen and (max-width: 1440px) {
    font-size: 60px;
  }

  @media screen and (max-width: 1100px) {
    font-size: 40px;
  }

  @media screen and (max-width: 768px) {
    font-size: 33px;
  }

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`

export const Subtitle = styled.h2`
  font-size: 40px;
  font-family: gluten;
  margin-bottom: 10px;

  @media screen and (max-width: 1440px) {
    font-size: 27px;
  }

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }

  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`

export const Desc = styled.p`
  font-size: 24px;
  text-align: center;
  font-family: poppins;

  @media screen and (max-width: 1440px) {
    font-size: 22px;
  }

  @media screen and (max-width: 1100px) {
    font-size: 18px;
  }

  @media screen and (max-width: 480px) {
    font-size: 15px;
  }
`
