import LandingPage from './pages/LandingPage';
import CoursesPage from './pages/CoursesPage';
import RoadmapPage from './pages/RoadmapPage';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BooksPage from './pages/BooksPage';
import QuizPage from './pages/QuizPage';

function App() {
  return (
    <Router>
      <div className="App">
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
        </Switch>
      </div>
    </Router>
  );
}

export default App;
