import styled from 'styled-components'
import { MdArrowForward, MdKeyboardArrowRight } from 'react-icons/md'

export const Container = styled.div`
  display: flex;
  height: calc(100vh - 80px);
  position: relative;
  z-index: 1;

  :before {
    content: '';
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    z-index: 2;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`

export const Left = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

export const Title = styled.h1`
  font-size: 80px;
  font-family: gluten;
  font-weight: 600;
  width: 80%;
  color: #14142b;

  @media screen and (max-width: 1440px) {
    font-size: 60px;
  }

  @media screen and (max-width: 1100px) {
    font-size: 40px;
  }

  @media screen and (max-width: 768px) {
    font-size: 33px;
    text-shadow: 2px 2px 5px black;
    font-weight: bold;
    margin-top: 170px;
    width: 90%;
    color: #fff;
    text-align: center;
  }

  @media screen and (max-width: 480px) {
    margin-top: 120px;
  }
`

export const Desc = styled.p`
  width: 80%;
  font-size: 24px;
  margin-top: 20px;
  line-height: 1.3em;
  font-family: poppins;

  @media screen and (max-width: 1440px) {
    font-size: 22px;
  }

  @media screen and (max-width: 1100px) {
    font-size: 18px;
  }

  @media screen and (max-width: 768px) {
    color: #fff;
    text-shadow: 2px 2px 10px black;
    text-align: justify;
  }

  @media screen and (max-width: 480px) {
    font-size: 15px;
    display: none;
  }
`

export const ButtonArea = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
`

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`

export const Right = styled.div`
  width: 40%;
`

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  margin-top: 80px;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 8% 100%);

  @media screen and (max-width: 768px) {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    clip-path: polygon(6% 0, 94% 0, 100% 100%, 0% 100%);
  }
`
