import styled from 'styled-components'

export const Container = styled.div`
  height: 100%;
  background: ${({ lightBg }) => (lightBg ? '#f9f9f9' : '#010606')};

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`
export const ServiceWrapper = styled.div`
  display: grid;
  height: 800px;
  width: 100%;
  margin: 0 auto;
  padding: 0 24px;
  justify-content: center;

  @media screen and (max-width: 1440px) {
    height: 700px;
  }
`
export const Row = styled.div`
  display: grid;
  grid-auto-column: minmax(auto, 1fr);
  grid-gap: 20px;
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`
export const Column1 = styled.div`
  margin-bottom: 12px;
  padding: 0 15px;
  grid-area: col1;
  z-index: 1;
`
export const Column2 = styled.div`
  margin-bottom: 12px;
  padding: 0 15px;
  grid-area: col2;
  z-index: 1;
`
export const TextWrapper = styled.div`
  max-width: 800px;
  padding-top: 0;
  padding-bottom: 60px;
  z-index: 1;

  @media screen and (max-width: 1440px) {
    max-width: 540px;
  }
`
export const TopLine = styled.p`
  color: #01bf71;
  font-size: 24px;
  line-height: 16px;
  font-weight: 700;
  font-family: poppins;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;

  @media screen and (max-width: 1440px) {
    font-size: 20px;
  }
`
export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 80px;
  font-family: gluten;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#14142b')};

  @media screen and (max-width: 1440px) {
    font-size: 60px;
  }
  @media screen and (max-width: 480px) {
    font-size: 32px;
    text-align: justify;
  }
`
export const Content = styled.p`
  max-width: 800px;
  margin-bottom: 35px;
  font-size: 24px;
  line-height: 1.3em;
  font-family: poppins;
  color: ${({ darkText }) => (darkText ? '#14142b' : '#fff')};

  @media screen and (max-width: 1440px) {
    max-width: 440px;
    font-size: 22px;
  }

  @media screen and (max-width: 1100px) {
    font-size: 18px;
  }

  @media screen and (max-width: 480px) {
    font-size: 15px;
  }
`
export const BtnWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
`
export const ImgWrap = styled.div`
  max-width: 800px;
  height: 100%;

  @media screen and (max-width: 1440px) {
    max-width: 555px;
  }
`
export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`
