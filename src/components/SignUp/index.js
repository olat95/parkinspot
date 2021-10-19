import React from 'react'
import uphouse from '../../images/housetwo.svg'
import {
  Container,
  Wrapper,
  FormContent,
  Form,
  FormWrapper,
  FormH1,
  Split,
  FormLabel,
  FormInput,
  FormButton,
  Text,
  Wrap,
  Textt,
  LinksRoute,
  Image,
} from './SignUpElement'

const SignUp = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <FormContent>
            <Form action='#'>
              <FormH1>Sign Up to Join ParkinspoT</FormH1>
              <Split>
                <FormWrapper>
                  <FormLabel htmlFor='for'>Firstname</FormLabel>
                  <FormInput type='text' placeholder='John' required />
                  <FormLabel htmlFor='for'>Lastname</FormLabel>
                  <FormInput type='text' placeholder='Doe' required />
                  <FormLabel htmlFor='for'>Email</FormLabel>
                  <FormInput
                    type='email'
                    placeholder='someone@gmail.com'
                    required
                  />
                  <FormButton type='submit'>Submit</FormButton>
                </FormWrapper>
                <FormWrapper>
                  <FormLabel htmlFor='for'>Phone Number</FormLabel>
                  <FormInput
                    type='number'
                    placeholder='+234 --- --- '
                    required
                  />
                  <FormLabel htmlFor='for'>Password</FormLabel>
                  <FormInput type='password' required />
                  <FormLabel htmlFor='for'>Confirm Password</FormLabel>
                  <FormInput type='password' required />
                </FormWrapper>
              </Split>
              <Wrap>
                <Text>By continuing, I agree to ParkinspoT</Text>
                <LinksRoute
                  to='/policy'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                >
                  PRIVACY POLICY
                </LinksRoute>
                <Text>and</Text>
                <LinksRoute
                  to='/policy'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                >
                  TERMS OF SERVICE
                </LinksRoute>
              </Wrap>
              <hr />
              <Wrap>
                <Textt>Already have an account?</Textt>
                <LinksRoute
                  to='/signin'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                >
                  Sign In
                </LinksRoute>
              </Wrap>
            </Form>
          </FormContent>
          <Image src={uphouse} alt='signuphouse' />
        </Wrapper>
      </Container>
    </>
  )
}

export default SignUp
