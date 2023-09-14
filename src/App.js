import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import './App.scss';
import Home from "./Components/Home/Home"
import Header from './Components/Header/Header';
import Tvshows from './Components/Tvshows/Tvshows';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/tvshows' element={<Tvshows />} />
      </Routes>
    </Router>
  );
}

export default App;
