import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Chats from './Chats';
import ChatScreen from './ChatScreen';
import Header from './Header';
import SwipeButtons from './SwipeButtons';
import TinderCards from './TinderCards';

function App() {
  return (
    <div className="app">
        <Router>
          <Switch>
              <Route exact path="/">
                <Header/>
                <TinderCards/>
                <SwipeButtons/>
              </Route>
              <Route exact path="/chats">
                <Header backButton="/"/>
                <Chats/>
              </Route>
              <Route path="/chats/:person">
                <Header backButton="/chats"/>
                <ChatScreen/>
              </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
