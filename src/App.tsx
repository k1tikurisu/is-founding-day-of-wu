import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import React from 'react'

import { en } from './pages/en'
import { ja } from './pages/ja'
import { NotFound } from './pages/notFound'

import styled from 'styled-components'
import { color, fontSize } from './styles/Utils'
import { GlobalStyle, Container } from './styles/GlobalStyles'

// defining the env
// localhost or github pages
const isDev = process.env.NODE_ENV === 'development'
const BASE_URL = isDev ? '/' : '/is-founding-day-of-wu/'

export const App: React.FC = () => {
  return (
    <Router>
      <GlobalStyle />
      <Container>
        <Language>
          <StyledLink to={`${BASE_URL}`}>Japanese</StyledLink>
          <Span>/</Span>
          <StyledLink to={`${BASE_URL}en`}>English</StyledLink>
        </Language>
        <Switch>
          <Route exact path={`${BASE_URL}`} component={ja} />
          <Route path={`${BASE_URL}en`} component={en} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Container>
    </Router>
  )
}

const Language = styled.div`
  font-size: ${fontSize.textBase};
  display: flex;
  justify-content: flex-end;
`

const Span = styled.span`
  color: ${color.textDefault};
  font-size: ${fontSize.textBase};
  margin-left: 4px;
  margin-right: 4px;
`

const LinkA = styled.a`
  color: ${color.textDefault};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  &:focus {
    text-decoration: underline;
  }
`

// add style to Link
const StyledLink = LinkA.withComponent(Link)
