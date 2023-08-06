import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import './App.scss';
import Home from "./Components/Home/Home"
import Header from './Components/Header/Header';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
