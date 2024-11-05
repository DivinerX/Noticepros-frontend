import React from 'react';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { routes } from './Route/route';
import "./App.css"

function App() {
  return (
    <Router>
      <Routes>
        {routes.map(({ path, element: Element }, index) => (
          <Route key={index} path={path} element={<Element />} />
        ))}
      </Routes>
    </Router>

  );
}

export default App;