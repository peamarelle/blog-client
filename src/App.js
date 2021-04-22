import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import Navigation from './components/navigation';
import List from './components/list';
import FormCreate from './components/formCreate';
import FormEdit from './components/formEdit';

function App() {
  return (
    <Router>
      <Navigation/>

      <Route path="/" exact component={List}/>
      <Route path="/create" component={FormCreate}/>
      <Route path="/edit/:id" component={FormCreate}/>
    </Router>
  );
}

export default App;
