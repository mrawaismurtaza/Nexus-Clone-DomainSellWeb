import './App.css';
import Domain from './Pages/Domains/Domain';
import Home from './Pages/Home/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/domain' element={<Domain />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
