import './App.css'
import loadable from '@loadable/component';
import {
  BrowserRouter as Router,
} from "react-router-dom";

///////////////
// Routes
////////////
const Routes = loadable(() => import('./Routes'));

//////////////
// App
///////////
const App = () => {

  return (
    <Router>
        <Routes />
    </Router>
  )
};

export default App;
