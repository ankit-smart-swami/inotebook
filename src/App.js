import './App.css';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Signup from './components/Signup';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import NoteState from './context/Notes/NoteState';
import UserState from './context/Auth/UserState.js';

function App() {
  return (
    <div className="App">
      <UserState>
        <NoteState>
          <Router>
            <Navbar />
            <Alert/>
            <Routes>
              <Route exact path="/fetures" element={<About />} />
              <Route exact path="/contact" element={<h3> This is Contact tab.</h3>} />
              <Route exact path="/login" element={<Login/>} />
              <Route exact path="/signup" element={<Signup/>} />
              <Route exact path="/" element={<Home />} />
            </Routes>
          </Router>
        </NoteState>
      </UserState>
    </div>
  );
}


export default App;
