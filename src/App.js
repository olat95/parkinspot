import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages'
import SignInPage from './pages/signin'
import SignUpPage from './pages/signup'
import Navbar from './components/Navbar'

function App() {
  return (
    <Router>
      <Navbar />
      <Route path='/signin' component={SignInPage} exact />
      <Route path='/signup' component={SignUpPage} exact />
      <Switch>
        <Route path='/' component={Home} exact />
      </Switch>
    </Router>
  )
}

export default App
