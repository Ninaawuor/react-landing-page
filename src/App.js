
import './App.css';
import Hello from "./components/hello/Hello";
import Form from "./components/form/Form";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Hello}/>
        <Route path='/form' exact component={Form}/>
      </Switch>
      
    </Router>
  );
}

export default App;
