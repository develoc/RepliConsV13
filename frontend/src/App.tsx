import React from 'react';
import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Timeline from './pages/Timeline';
import Memories from './pages/Memories';
import Personality from './pages/Personality';

const AppContainer = styled.div`
  background-color: #05070a;
  color: #f8fafc;
  min-height: 100vh;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
`;

function App() {
  return (
    <AppContainer>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/memories" element={<Memories />} />
        <Route path="/personality" element={<Personality />} />
      </Routes>
    </AppContainer>
  );
}

export default App;
