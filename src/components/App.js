
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from "react-router-dom";
import './../styles/App.css';

function PrivateRoute({ isAuthenticated, children }) {
  return isAuthenticated ? children : <Navigate to="/login" />;
}

// Pages
function Playground() {
  return (
    <div className="main-container">
      <h1>Welcome to the Code Playground!</h1>
    </div>
  );
}

function Login({ setIsAuthenticated }) {
  const handleLogin = () => {
    setIsAuthenticated(true);
  };
  return (
    <div className="main-container">
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

function NotFound() {
  return <h2>Page not Found</h2>;
}

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
   <Router>
      <div className="main-container">
        <p>
          {isAuthenticated
            ? "You are authenticated"
            : "You are not authenticated, Please login first"}
        </p>
        <nav>
          <ul>
            <li>
              <Link to="/playground">PlayGround</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
      </div>

      <Routes>
        <Route
          path="/playground"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <Playground />
            </PrivateRoute>
          }
        />
        <Route
          path="/login"
          element={<Login setIsAuthenticated={setIsAuthenticated} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
