import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Air from './Components/Air';
import Frames from './Components/Frames';
import Low from './Components/Low';
import High from './Components/High';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/open-air' element={<Air/>} />
        <Route path='/cold-frames' element={<Frames/>} />
        <Route path='/low-tunnel' element={<Low/>} />
        <Route path='/high-tunnel' element={<High/>} />
      </Routes>
      </BrowserRouter>
    </div>
  
  );
}

export default App;
