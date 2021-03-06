import styled from 'styled-components'

export const Square = styled.div`
  width: 100px;
  height: 100px;
  background-color: #4e6bff;
  opacity: 0.7;
  position: absolute;
  top: 100px;
  left: -100px;
  z-index: -1;
  animation: square 25s linear alternate infinite;
  overflow: hidden;

  @keyframes square {
    to {
      transform: translate(1100px, 1000px);
    }
  }
`
export const Circle = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: crimson;
  opacity: 0.7;
  position: absolute;
  top: 200px;
  left: -100px;
  z-index: -1;
  animation: circle 25s linear alternate infinite;

  @keyframes circle {
    to {
      transform: translate(100vw, -100vh);
    }
  }
`
export const Rectangle = styled.div`
  width: 50px;
  height: 100px;
  background-color: #ff97af;
  opacity: 0.5;
  position: absolute;
  top: 400px;
  left: -50px;
  z-index: -1;
  animation: rectangle 25s linear alternate infinite;

  @keyframes rectangle {
    to {
      transform: translate(100vw, -50vh);
    }
  }
`
