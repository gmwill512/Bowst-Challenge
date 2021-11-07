import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Services from './pages/Services';
import Clients from './pages/Clients';
import Pricing from './pages/Pricing';
import Resources from './pages/Resources';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/services" element={<Services />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
