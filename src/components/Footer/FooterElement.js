import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  background-color: #fff;
`

export const Wrapper = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`

export const FooterLinksContainer = styled.div`
  display: flex;
  width: 80%;
  justify-content: center;
  background-color: #101522;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`

export const FooterLinkWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 30px;
  text-align: left;
  box-sizing: border-box;
  color: #fff;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`

export const FooterLinkTitle = styled.h1`
  font-size: 40px;
  font-weight: 600;
  margin-bottom: 30px;
  font-family: gluten;

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

export const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 24px;
  font-family: poppins;

  &:hover {
    color: #81ecec;
    transition: 0.3s ease-out;
  }

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

export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`

export const MediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`

export const MediaLogo = styled(Link)`
  color: #101522;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
  ${'' /* color: #fff; */}
  font-family: gluten;
  justify-self: flex-start;
  font-size: 1.9rem;
  text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #81ecec,
    0 0 30px #81ecec, -10px -23px 0px rgba(206, 89, 55, 0);
  text-decoration: none;
`

export const MediaRights = styled.small`
  color: #101522;
  font-size: 15px;
  margin-bottom: 16px;
  font-family: poppins;
`

export const SocialIcon = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`

export const SocialIconLinks = styled.a`
  color: #101522;
  font-size: 24px;
`
