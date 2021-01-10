import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PostDetails from './Component/PostDetails/PostDetails';
import NoMatch from './Component/NoMatch/NoMatch';
import Home from './Component/Home/Home';


function App() {
  return (
    
   <Router>
      <Switch>
        <Route path='/home'>
          <Home></Home>
        </Route>
        <Route path='/post/:postId'>
           <PostDetails></PostDetails>
        </Route>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route path='*'>
          <NoMatch></NoMatch>
        </Route>
      </Switch>
   </Router>
     
  );
}

export default App;
