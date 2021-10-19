import React from 'react'
import inhouse from '../../images/houseone.svg'
import {
  Container,
  Wrapper,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Text,
  Textt,
  Wrap,
  Image,
  LinksRoute,
} from './SignInElement'

const SignIn = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <FormContent>
            <Form action='#'>
              <FormH1>Welcome Back!</FormH1>
              <FormLabel htmlFor='for'>Email</FormLabel>
              <FormInput
                type='email'
                placeholder='someone@gmail.com'
                required
              />
              <FormLabel htmlFor='for'>Password</FormLabel>
              <FormInput type='password' required />
              <FormButton type='submit'>Log In</FormButton>
              <Text>
                <i>Forgot Password?</i>
              </Text>
              <hr />
              <Wrap>
                <Textt>Don't have an account yet?</Textt>
                <LinksRoute
                  to='/signup'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                >
                  Sign Up
                </LinksRoute>
              </Wrap>
            </Form>
          </FormContent>
          <Image src={inhouse} alt='signinhouse' />
        </Wrapper>
      </Container>
    </>
  )
}

export default SignIn
