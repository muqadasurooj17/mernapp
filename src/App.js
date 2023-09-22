
import './App.css';
import Home from './screens/Home';
import Login from './screens/Login';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Signup from './screens/Signup';


function App() {
  return (
    <Router>
<div>
  <Routes>
    <Route exact path='/' element={<Home/>}/>
    <Route exact path='/login' element={<Login/>}/>
    <Route exact path='/login' element={<Signup/>}/>
  </Routes>
</div>
  
    </Router>
  );
}

export default App;
