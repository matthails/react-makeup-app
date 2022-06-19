import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
