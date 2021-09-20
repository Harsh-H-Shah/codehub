import LandingPage from './pages/LandingPage';
import CoursesPage from './pages/CoursesPage';
import RoadmapPage from './pages/RoadmapPage';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BooksPage from './pages/BooksPage';
import QuizPage from './pages/QuizPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

function App() {
  return (
    <Router>
      <div className="App select-none">
          <Switch>
            <Route exact path="/">
              <LandingPage />
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
              <SignupPage />
            </Route>
            <Route path="/login">
              <LoginPage />
            </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
