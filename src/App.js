import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import Tutorials from './components/Tutorials/Tutorials'
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
import Tutorial from './components/Tutorial/Tutorial';

function App() {
  return (
    <div className="App bg-gray-50">
      <Router>
        <Header/>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/services'>
            <Services></Services>
          </Route>
          <Route exact path='/tutorials'>
            <Tutorials></Tutorials>
          </Route>
          <Route exact path='/tutorial/:videoId'>
            <Tutorial></Tutorial>
          </Route>
          <Route path='/about'>
            <About></About>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
