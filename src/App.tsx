import { 
  BrowserRouter as Router, 
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import React, { useState } from 'react'

import { En } from './pages/En'
import { Ja } from './pages/Ja'
import { SelectBox } from './components/SelectBox'

export const App = () => {
  const [lang, setLang] = useState('/')
  
  const changeLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault()
    setLang(e.target.value)
  }

  return (
    <Router>
      <header>
        <SelectBox doChange={changeLang} />
      </header>
      <Redirect to={lang} />
      <Switch>
        <Route path='/en'>
          <En />
        </Route>
        <Route path='/'>
          <Ja />
        </Route>
      </Switch>
    </Router>
  )
}
