import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Page1 from './components/Page1.js';
import Page2 from './components/Page2.js';
import Page3 from './components/Page3.js';
import Page4 from './components/Page4.js';
import Page5 from './components/Page5.js';
import Pass2 from './components/Pass2.js';
import Pass1 from './components/Pass1.js';
import Pass3 from './components/Pass3.js';
import Pass4 from './components/Pass4.js';
import Pass5 from './components/Pass5.js';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  document.title = 'Happy Birthday 🎂'
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Pass1 />} />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/pass2" element={<Pass2 />} />
          <Route path='/page2' element={<Page2 />} />
          <Route path="/pass3" element={<Pass3 />} />
          <Route path='/page3' element={<Page3 />} />
          <Route path="/pass4" element={<Pass4 />} />
          <Route path='/page4' element={<Page4 />} />
          <Route path="/pass5" element={<Pass5 />} />
          <Route path='/page5' element={<Page5 />} />
        </Routes>
      </Router>
      <ToastContainer position="top-right" autoClose={2000} hideProgressBar={true} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss={false} draggable={false} pauseOnHover={false} theme="dark" style={{ paddingTop: '15px' }} />
    </>
  )
}

export default App;