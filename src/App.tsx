import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routes } from './Route';
import { Provider } from 'react-redux';
import store from './redux/index';
import "./App.css"

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {routes.map(({ path, element: Element }, index) => (
            <Route key={index} path={path} element={<Element />} />
          ))}
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;