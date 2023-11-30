import './App.css';
import { Route, Switch } from 'react-router-dom';
import AllMeetups from './pages/AllMeetups';
import NewMeetupsPage from './pages/NewMeetups';
import Favorites from './pages/Favorites';
import Layout from './components/layout/Layout';
function App() {
  return (
    <Layout>

      <Switch>
        <Route path='/' exact={true}>
          <AllMeetups />
        </Route>

        <Route path='/addmeetup'>
          <NewMeetupsPage />
        </Route>

        <Route path='/fav'>
          <Favorites />
        </Route>
      </Switch>

    </Layout>
  );
}

export default App;
