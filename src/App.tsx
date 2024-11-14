import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routes } from './Route';
import { Provider } from 'react-redux';
import store from './redux/index';
import "./App.css"
import "toastr/build/toastr.min.css";
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {routes.map(({ path, element: Element, protected: isProtected }) => (
            <Route
              key={path}
              path={path}
              element={
                isProtected ? (
                  <PrivateRoute>
                    <Element />
                  </PrivateRoute>
                ) : (
                  <Element />
                )
              }
            />
          ))}
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;