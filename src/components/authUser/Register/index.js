import React, { useEffect, useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { Col, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router";

const Register = () => {

    let [showPass, setShowPass] = useState(false);
    let [email, setEmail] = useState("");
    let [phone, setPhone] = useState("");
    let [pass, setPass] = useState("");
    let navigate = useNavigate();

    let handleRegister = () => {
        navigate("/");
    };

    let handleCancel = () => {
        setEmail("");
        setPhone("");
        setPass("");
    };

    let handleKeyPress = (e) => {
        if (/[0-9\b\t\r]/.test(e.key) || e.key === "ArrowLeft" || e.key === "ArrowRight" || e.key === "Delete" || e.key === "Backspace") {
        } else { e.preventDefault(); }
    };

    useEffect(() => {
        document.title = "Register User";
    }, []);

    return (
        <React.Fragment>
            <Row className="special-container">
                <Col md={12} lg={2}></Col>
                <Col md={12} lg={8}>
                    <div className="special-row">
                        <h1 className="pro-head reg-head"> Register Page </h1>
                        <form>
                            <Row>
                                <Col md={12} lg={3}>
                                    <Form.Group className="mb-3">
                                        <Form.Control className="pro-form" type="text" placeholder="Enter Your Salutation"
                                            value={email} onChange={(e) => setEmail(e.target.value)} required />
                                    </Form.Group>
                                </Col>
                                <Col md={12} lg={3}>
                                    <Form.Group className="mb-3">
                                        <Form.Control className="pro-form" type="text" placeholder="Enter Your First Name"
                                            value={email} onChange={(e) => setEmail(e.target.value)} autoFocus required />
                                    </Form.Group>
                                </Col>
                                <Col md={12} lg={3}>
                                    <Form.Group className="mb-3">
                                        <Form.Control className="pro-form" type="text" placeholder="Enter Your Middle Name"
                                            value={email} onChange={(e) => setEmail(e.target.value)} required />
                                    </Form.Group>
                                </Col>
                                <Col md={12} lg={3}>
                                    <Form.Group className="mb-3">
                                        <Form.Control className="pro-form" type="email" placeholder="Enter Your Last Name"
                                            value={email} onChange={(e) => setEmail(e.target.value)} required />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={12} lg={4}>
                                    <Form.Group className="mb-3">
                                        <Form.Control className="pro-form" type="tel" placeholder="Enter Your Mobile Number" 
                                            value={phone} onChange={(e) => setPhone(e.target.value)} onKeyDown={handleKeyPress} maxLength={10} required />
                                    </Form.Group>
                                </Col>
                                <Col md={12} lg={4}>
                                    <Form.Group className="mb-3">
                                    <Form.Control className="pro-form" type="email" placeholder="Enter Your e-Mail ID"
                                        value={email} onChange={(e) => setEmail(e.target.value)} required />
                                    </Form.Group>
                                </Col>
                                <Col md={12} lg={4}>
                                    <Form.Group className="mb-3 password-container">
                                        <Form.Control className="pro-form" type={showPass ? "text" : "password"} placeholder="Enter Your Password"
                                            value={pass} onChange={(e) => setPass(e.target.value)} required />
                                        <span className="toggle-icon reg-icon" onClick={() => setShowPass((prev) => !prev)} >
                                            {showPass ? <IoEyeOffOutline /> : <IoEyeOutline />}
                                        </span>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <div className="spe-contain btn-contain">
                                <button type="submit" className="act-btn login-btn" onClick={handleRegister}>Register</button>
                                <button type="button" className="act-btn cancel-btn" onClick={handleCancel}>Clear</button>
                            </div>
                            <div className="spe-contain reg-contain">
                                <Link to="/" className="act-link"> Already Registered? </Link> 
                            </div>
                        </form>
                    </div>
                </Col>
                <Col md={12} lg={2}></Col>
            </Row>
        </React.Fragment>
    );
};

export default Register;