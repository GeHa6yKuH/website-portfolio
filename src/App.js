import './App.scss';
import { Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';

function App() {
  return (
    <div style={{ position: 'relative', height: '100vh' }}>
      <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
            <Route path='projects' element={<Projects />} />
          </Route>
      </Routes>
      <div style={{
        position: 'absolute',
        right: 50,
        bottom: 0,
        height: '30%',
        width: '2px',
        backgroundColor: 'yellow'
      }}></div>
      
      <div style={{
        position: 'absolute',
        fontSize: 18,
        right: -95,
        bottom: '45%',
        transform: 'rotate(-90deg)',
        color: 'white' 
      }}>
         const char* name = Bogdans Podalevics;
      </div>
    </div>
  )
}



export default App;
