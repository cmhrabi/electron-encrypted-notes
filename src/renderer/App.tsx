import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import '../bootstrap.css';
import Home from '../screens/Home';
import Editor from '../screens/Editor';
import React from 'react';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/editor" element={<Editor />} />
      </Routes>
    </Router>
  );
}

export default App
