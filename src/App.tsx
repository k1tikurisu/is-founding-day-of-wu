import { 
  BrowserRouter as Router, 
  Switch,
  Route,
  Link
} from 'react-router-dom'

import { En } from './pages/En'
import { Ja } from './pages/Ja'

export const App = () => {
  return (
    <Router>
      <nav>
        <Link to='/'>Japanese</Link>
        <Link to='/en'>English</Link>
      </nav>
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
