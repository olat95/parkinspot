import styled from 'styled-components'
import bg from '../../images/background.png'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  min-height: 692px;
  z-index: 0;
  overflow: hidden;
`

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }

  @media screen and (max-width: 400px) {
    flex-direction: column;
    width: 100%;
  }
`

export const FormContent = styled.div`
  height: calc(100vh - 80px);
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 1440px) {
    margin-top: 80px;
  }

  @media screen and (max-width: 1024px) {
    margin-top: 100px;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`

export const Form = styled.form`
  background: url(${bg});
  max-width: 400px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 80px 32px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

  @media screen and (max-width: 400px) {
    padding: 32px;
  }
`

export const FormH1 = styled.h1`
  margin-bottom: 40px;
  font-family: gluten;
  color: #fff;
  font-size: 30px;
  font-weight: 400;
  text-align: center;
`

export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-family: gluten;
  font-size: 20px;
  color: #fff;
`

export const FormInput = styled.input`
  padding: 16px;
  margin-bottom: 32px;
  border: none;
  font-family: poppins;
  border-radius: 4px;
`

export const FormButton = styled.button`
  background: #81ecec;
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  font-family: poppins;
  cursor: pointer;
`

export const Text = styled.span`
  text-align: center;
  margin: 15px 0;
  color: #fff;
  font-size: 14px;
  font-family: poppins;
`

export const Wrap = styled.div`
  text-align: center;
  display: flex;
  margin-top: 17px;
`

export const Textt = styled.p`
  color: #fff;
  font-family: poppins;
`

export const LinksRoute = styled(Link)`
  color: #81ecec;
  text-decoration: none;
  font-family: poppins;
  cursor: pointer;
  margin-left: 10px;
`

export const Image = styled.img`
  width: 50%;

  @media screen and (max-width: 1024px) {
    width: 50%;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`
