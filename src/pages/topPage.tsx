import React, { FC } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import TopHeader from '../components/topPage/topHeader';
import TopMain from '../components/topPage/topMain';

const TopPage: FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <TopHeader />
          <TopMain />
        </Route>
        <Route exact path="/search/:keyword">
          検索結果
        </Route>
      </Switch>
    </Router>
  );
};

export default TopPage;