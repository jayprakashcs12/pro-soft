import React from 'react';
import { BrowserRouter as Router } from 'react-router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
    <Router>
      <ToastContainer toastStyle={{ backgroundColor: "var(--color01)", color: "var(--color02)" }} hideProgressBar style={{ width: "200px" }} />
      <App />
    </Router>
  </React.Fragment>
);