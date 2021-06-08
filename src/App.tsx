import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import React, { useState } from 'react'

import { en } from './pages/en'
import { ja } from './pages/ja'

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
      <select name="language" onChange={changeLang}>
        {langs.map((lang) => {
          return (
            <option key={lang.name} value={lang.path}>
              {lang.name}
            </option>
          )
        })}
      </select>
      <Redirect to={lang} />
      <Switch>
        <Route path="/en" component={en} />
        <Route path="/" component={ja} />
      </Switch>
    </Router>
  )
}
