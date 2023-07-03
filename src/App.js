import './App.css';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/about" element={<About />}/>
          <Route exact path="/fetures" element={<h3> This is Fetures tab.</h3>}/>
          <Route exact path="/contact" element={<h3> This is Contact tab.</h3>}/>
          <Route exact path="/" element={<Home />}/>
        </Routes>
      </Router>
    </div>
  );
}


export default App;
