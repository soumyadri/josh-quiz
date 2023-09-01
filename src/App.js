import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Login } from './Components/Login';
import { Questions } from './Components/Questions';
import { Result } from './Components/Result';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Router>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route path="/question" element={<Questions />} />
            <Route path="/result" element={<Result />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
