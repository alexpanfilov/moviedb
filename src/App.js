import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';
import MovieDetail from './components/moviedetail/MovieDetail';
import Header from './components/header/Header';


export function App() {
  return (
<div>
  <Header></Header>
  <Switch>
    <Route path="/" component={Home} exact /> 
    <Route path="/movie/:id" component={MovieDetail} exact />
  </Switch>
</div>
  );
}

export default App;
