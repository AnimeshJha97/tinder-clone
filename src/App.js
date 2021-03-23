import './App.css';
import Header from './Header';
import {
  BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TinderCards from './TinderCards.js';
import SwipeButtons from './SwipeButtons.js';
import Chats from './Chats.js';
import ChatScreen from './ChatScreen.js';
function App() {
  return (
    <div className="App">    
      <Router>      
        <Switch>
        <Route path="/chat/:person">
            {/* header with a backButton prop passed as an argument to the header.js file*/}
            <Header backButton="/chat" /> 
            <ChatScreen />
          </Route>
          <Route path="/chat">
            <Header backButton="/" /> 
            <Chats />
          </Route>

          <Route path="/">  {/* default page */}
            {/* header */}
            <Header />
            {/* Tinder Cards */}
            <TinderCards />

            {/* Swipe Buttons */}
            <SwipeButtons />
          </Route>
        </Switch>
      </Router>      
    </div>
  );
}

export default App;

// Always have the default page route at the bottom



// {/* tinder cards */}

// {/* buttons */}

// {/* chat screen */}

// {/* individual chat screen */}

