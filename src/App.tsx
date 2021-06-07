import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import React, { useState } from 'react'

import { En } from './pages/En'
import { Ja } from './pages/Ja'
import { SelectBox } from './components/Parts/SelectBox'
import { Container } from './components/Layouts/Container'

export const App: React.FC = () => {
  const [lang, setLang] = useState('/')

  // redirect to 'lang' when SelectBox is changed.
  const changeLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault()
    setLang(e.target.value)
  }

  return (
    <Router>
      <Container>
        <header>
          <SelectBox changeLang={changeLang} />
        </header>
        <Redirect to={lang} />
        <Switch>
          <Route path="/en">
            <En />
          </Route>
          <Route path="/">
            <Ja />
          </Route>
        </Switch>
      </Container>
    </Router>
  )
}
