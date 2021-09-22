import LandingPage from './pages/LandingPage';
import CoursesPage from './pages/CoursesPage';
import RoadmapPage from './pages/RoadmapPage';
import React, {useState} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BooksPage from './pages/BooksPage';
import QuizPage from './pages/QuizPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import './firebase.js';

function App() {
  const [user, setUser] = useState(null);
  return (
      <Router>
        <div className="App select-none">
          <Switch>
            <Route exact path="/">
              <LandingPage user={user} setUser={setUser} />
            </Route>
            <Route path="/courses">
              <CoursesPage />
            </Route>
            <Route path="/roadmap">
              <RoadmapPage />
            </Route>
            <Route path="/books">
              <BooksPage />
            </Route>
            <Route path="/quiz">
              <QuizPage />
            </Route>
            <Route path="/signup">
              <SignupPage user={user} setUser={setUser} />
            </Route>
            <Route path="/login">
              <LoginPage user={user} setUser={setUser} />
            </Route>
          </Switch>
        </div>
      </Router>
  );
}

export default App;
