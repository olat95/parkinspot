import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Button = styled(Link)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? '#81ecec' : '#010606')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
  color: ${({ dark }) => (dark ? '#010606' : '#fff')};
  font-size: ${({ fontBig }) => (fontBig ? '30px' : '20px')};
  outline: none;
  border: none;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? '#dfe6e9' : '#81ecec')};
  }
`
