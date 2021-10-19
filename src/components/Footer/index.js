import React from 'react'
import { animateScroll as scroll } from 'react-scroll'
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa'
import {
  Container,
  Wrapper,
  FooterLinksContainer,
  FooterLinkWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  MediaWrap,
  MediaLogo,
  MediaRights,
  SocialIcon,
  SocialIconLinks,
} from './FooterElement'

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop()
  }

  return (
    <Container>
      <Wrapper>
        <FooterLinksContainer>
          <FooterLinkWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>For Homeowners</FooterLinkTitle>
              <FooterLink to='/signup'>Register your house</FooterLink>
              <FooterLink to='/signup'>How it works</FooterLink>
              <FooterLink to='/signup'>Refer a Homeowner</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>For Customers</FooterLinkTitle>
              <FooterLink to='/signup'>Register your car</FooterLink>
              <FooterLink to='/signup'>How it works</FooterLink>
              <FooterLink to='/signup'>Refer a Carowner</FooterLink>
            </FooterLinkItems>
          </FooterLinkWrapper>
          <FooterLinkWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Who We Are</FooterLinkTitle>
              <FooterLink to='/signup'>About</FooterLink>
              <FooterLink to='/signup'>Careers</FooterLink>
              <FooterLink to='/signup'>Terms of service</FooterLink>
              <FooterLink to='/signup'>Privacy</FooterLink>
              <FooterLink to='/signup'>Investors</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Support</FooterLinkTitle>
              <FooterLink to='/signup'>Get Help 24/7</FooterLink>
              <FooterLink to='/signup'>FAQ</FooterLink>
            </FooterLinkItems>
          </FooterLinkWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <MediaWrap>
            <MediaLogo to='/' onClick={toggleHome}>
              ParkinspoT
            </MediaLogo>
            <MediaRights>
              ParkinspoT © {new Date().getFullYear()} All rights reserved.
            </MediaRights>
            <SocialIcon>
              <SocialIconLinks
                href='//www.facebook.com'
                target='_blank'
                aria-label='Facebook'
              >
                <FaFacebook />
              </SocialIconLinks>
              <SocialIconLinks
                href='//www.instagram.com'
                target='_blank'
                aria-label='Instagram'
              >
                <FaInstagram />
              </SocialIconLinks>
              <SocialIconLinks
                href='//www.youtube.com'
                target='_blank'
                aria-label='YouTube'
              >
                <FaYoutube />
              </SocialIconLinks>
              <SocialIconLinks
                href='//www.twitter.com'
                target='_blank'
                aria-label='Twitter'
              >
                <FaTwitter />
              </SocialIconLinks>
              <SocialIconLinks
                href='//www.linkedin.com'
                target='_blank'
                aria-label='LinkedIn'
              >
                <FaLinkedin />
              </SocialIconLinks>
            </SocialIcon>
          </MediaWrap>
        </SocialMedia>
      </Wrapper>
    </Container>
  )
}

export default Footer
