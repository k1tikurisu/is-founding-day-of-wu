import styled, { createGlobalStyle } from 'styled-components'
import { color, fontSize } from './Utils'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'Noto Sans JP', sans-serif;
    background-color: #FAFAFA;
  }
`

export const Container = styled.div`
  max-width: 260px;
  margin: 60px auto 0 auto;

  @media screen and (min-width: 600px) {
    max-width: 400px;
  }
  @media screen and (min-width: 1000px) {
    max-width: 800px;
  }
`

export const HeadLine = styled.h1`
  color: ${color.textDefault};
  text-align: center;
  font-weight: 400;
  font-size: ${fontSize.textLg};

  @media screen and (min-width: 600px) {
    font-size: ${fontSize.textXl};
  }
  @media screen and (min-width: 1000px) {
    font-size: ${fontSize.text2Xl};
  }
`
