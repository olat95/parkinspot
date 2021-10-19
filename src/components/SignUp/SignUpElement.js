import styled from 'styled-components'
import { Link } from 'react-router-dom'
import bg from '../../images/background.png'

export const Container = styled.div`
  min-height: 692px;
  margin-top: 30px;
  z-index: 0;
  overflow: hidden
  background: linear-gradient(108deg, rgba(1,147,86,1) 0%, rgba(10,201,122,1)100%);
`

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
  @media screen and (max-width: 768px) {
    height: 80%;
  }
`

export const FormContent = styled.div`
  height: calc(100vh - 80px);
  margin-top: 50px;
  margin-left: 50px;
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 1024px) {
    width: 90%;
  }

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`

export const Form = styled.form`
  background: url(${bg});
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 30px 32px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

  @media screen and (max-width: 400px) {
    padding: 32px;
  }
`

export const Split = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 30px;
`

export const FormWrapper = styled.div`
  width: 100%;
`

export const FormH1 = styled.h1`
  margin-bottom: 40px;
  color: #fff;
  font-size: 30px;
  font-family: gluten;
  font-weight: 400;
  text-align: center;
`

export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-family: poppins;
  font-size: 20px;
  color: #fff;
`

export const FormInput = styled.input`
  padding: 16px;
  width: 100%;
  font-family: poppins;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;
`

export const FormButton = styled.button`
  background: #81ecec;
  padding: 16px 0;
  width: 100%;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
`

export const Text = styled.span`
  text-align: center;
  margin-bottom: 10px;
  color: #fff;
  font-size: 14px;
  font-family: poppins;
`

export const Wrap = styled.div`
  display: flex;
  justify-content: center;
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
  margin-right: 10px;
`

export const Image = styled.img`
  width: 50%;
  max-width: 500px;
  margin-left: 100px;
  margin-right: 50px;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`
