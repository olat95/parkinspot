import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: #f7f7fc;
`
export const TitleWrapper = styled.div`
  text-align: center;
  margin-top: 160px;
  z-index: 1;

  @media screen and (max-width: 1440px) {
    padding-top: 20px;
    margin-top: 70px;
  }

  @media screen and (max-width: 1024px) {
    padding-top: 20px;
    margin-top: 70px;
  }

  @media screen and (max-width: 768px) {
    padding-top: 50px;
    margin: 0 auto;
  }
`
export const Title = styled.h1`
  font-family: gluten;
  color: #14142b;
  font-size: 80px;
  padding-bottom: 40px;
  line-height: 1.1;
  font-weight: 600;
  letter-spacing: -0.005em;

  @media screen and (max-width: 1440px) {
    margin: 0;
    padding: 0;
    font-size: 60px;
  }

  @media screen and (max-width: 768px) {
    width: 90%;
    margin: 0 auto;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`
export const OptionWrapper = styled.div`
  display: flex;
  z-index: 1;
  align-items: space-between;
  width: 100%;
  padding: 50px 70px;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    padding: 0;
  }
`
export const OptionItem = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px 25px;
  ${'' /* border: 1px solid black; */}

  @media screen and (max-width: 768px) {
    padding: 0;
    margin: 0;
  }

  @media screen and (max-width: 480px) {
    width: 70%;
    height: 100%;
    padding: 25px 0 10px 0;
    margin: 0 auto;
    ${'' /* border: 1px solid black; */}
  }
`
export const Image = styled.img`
  width: 150px;
  height: 150px;
  margin: 0 auto;
  margin-bottom: 20px;
  display: flex;

  @media screen and (max-width: 1440px) {
    width: 100px;
    height: 100px;
  }

  @media screen and (max-width: 768px) {
    padding: 0;
    width: 70px;
    height: 70px;
    margin: 15px;
  }

  @media screen and (max-width: 480px) {
    width: 50px;
    height: 50px;
    margin: 0 auto;
  }
`
export const Subtitle = styled.h1`
  font-family: gluten;
  font-style: normal;
  font-weight: bold;
  color: #14142b;
  font-size: 40px;
  padding-bottom: 20px;
  line-height: 1.1;
  font-weight: 600;
  letter-spacing: -0.005em;

  @media screen and (max-width: 1440px) {
    font-size: 27px;
  }

  @media screen and (max-width: 768px) {
    font-size: 20px;
    margin: 0;
    padding: 0;
    margin-left: 15px;
  }

  @media screen and (max-width: 480px) {
    font-size: 16px;
    text-align: justify;
  }
`

export const Desc = styled.p`
  font-size: 24px;
  line-height: 1.3em;
  font-family: poppins;
  color: #14142b;

  @media screen and (max-width: 1440px) {
    font-size: 22px;
  }

  @media screen and (max-width: 1100px) {
    font-size: 18px;
  }

  @media screen and (max-width: 768px) {
    margin-left: 15px;
  }

  @media screen and (max-width: 480px) {
    font-size: 15px;
    text-align: justify;
  }
`
