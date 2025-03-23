import React from 'react';
import ForgotPassword from './components/authUser/ForgotPassword';
import UpdateProfile from './components/pages/UpdateProfile';
import ViewProfile from './components/pages/ViewProfile';
import Register from './components/authUser/Register';
import Dashboard from './components/pages/Dashboard';
import Login from './components/authUser/Login';
import Header from './components/godmod/Header';
import Footer from './components/godmod/Footer';
import { Routes, Route } from 'react-router';
import { Container } from 'react-bootstrap';

export default function App() {
  return (
    <React.Fragment>
      <Header />
      <Container fluid>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/update-profile" element={<UpdateProfile />} />
          <Route path="/view-profile" element={<ViewProfile />} />
          <Route path="/register-user" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<Login />} />
        </Routes>
      </Container>
      <Footer />
    </React.Fragment>
  )
}