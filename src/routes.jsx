import React from 'react';
import { Route } from 'react-router-dom';
import App from './App';
import HomePage from './pages/HomePage';
import PlayPage from './pages/PlayPage';
import RulesPage from './pages/RulesPage';
import LeaderBoard from './pages/LeaderboardPage';

export default (
  <>
    <Route exact path="/" component={App} />
    <Route path="/home" component={HomePage} />
    <Route path="/play" component={PlayPage} />
    <Route path="/rules" component={RulesPage} />
    <Route path="/leaderboard" component={LeaderBoard} />
  </>
);
