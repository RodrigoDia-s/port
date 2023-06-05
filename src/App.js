import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './Components/NavBar'

import { Footer } from "./Components/Footer";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProjectDisplay from './pages/ProjectDisplay';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      
        <NavBar />
        <Router>
        <Routes>
        
          <Route path='/port' element={<Home />}/>
          <Route path="/port/projects/:id" element={<ProjectDisplay />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
