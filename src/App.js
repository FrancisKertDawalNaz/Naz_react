import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Naz from './naz';
import Home from './Home'; 
import About from './About';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul style={{ listStyle: 'none', display: 'flex', gap: '1rem' }}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/naz">Naz</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>
        <header className="App-header">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/naz" element={<Naz />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
