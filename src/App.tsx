import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import React, { useState } from 'react'

import { en } from './pages/en'
import { ja } from './pages/ja'

import styled from 'styled-components'
import { color, fontSize } from './styles/Utils'
import { GlobalStyle, Container } from './styles/GlobalStyles'

export const App: React.FC = () => {
  const [lang, setLang] = useState('/')

  // select box
  const langs = [
    { name: 'Japanese', path: '/' },
    { name: 'English', path: '/en' },
  ]

  // redirect to 'lang' when SelectBox is changed.
  const changeLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault()
    setLang(e.target.value)
  }

  return (
    <Router>
      <GlobalStyle />
      <Container>
        <Select name="language" onChange={changeLang}>
          {langs.map((lang) => {
            return (
              <option key={lang.name} value={lang.path}>
                {lang.name}
              </option>
            )
          })}
        </Select>
        <Redirect to={lang} />
        <Switch>
          <Route path="/en" component={en} />
          <Route path="/" component={ja} />
        </Switch>
      </Container>
    </Router>
  )
}

const Select = styled.select`
  font-size: ${fontSize.textBase};
  padding: 3px 10px;
  margin: 0 0 0 auto;
  display: block;
  text-align-last: center;
  color: ${color.textDefault};
  cursor: pointer;
  border: 2px solid ${color.textDefault};
  -webkit-appearance: none;
  -moz-appearance: none;
`
