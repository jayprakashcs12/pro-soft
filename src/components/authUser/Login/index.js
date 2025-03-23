import React, { useEffect, useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { Col, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router";

const Login = () => {

    let [showPass, setShowPassword] = useState(false);
    let [email, setEmail] = useState("");
    let [pass, setPass] = useState("");
    let navigate = useNavigate();

    let handleCancel = () => {
        setEmail("");
        setPass("");
    };

    let handleLogin = () => {
        navigate("/dashboard");
    };

    useEffect(() => {
        document.title = "Login Page";
    }, []);

    return (
        <React.Fragment>
            <Row className="justify-content-center special-container">
                <Col md={12} lg={4}></Col>
                <Col md={12} lg={4}>
                    <div className="special-row">
                        <h1 className="pro-head log-head"> Login Page </h1>
                        <form>
                            <Form.Group className="mb-3">
                                <Form.Control className="pro-form" type="email" placeholder="Enter Your e-Mail ID"
                                    value={email} onChange={(e) => setEmail(e.target.value)} autoFocus required />
                            </Form.Group>
                            <Form.Group className="mb-3 password-container">
                                <Form.Control className="pro-form" type={showPass ? "text" : "password"} placeholder="Enter Your Password"
                                    value={pass} onChange={(e) => setPass(e.target.value)} required />
                                <span className="toggle-icon log-icon" onClick={() => setShowPassword((prev) => !prev)} >
                                    {showPass ? <IoEyeOffOutline /> : <IoEyeOutline />}
                                </span>
                            </Form.Group>
                            <div className="spe-contain btn-contain">
                                <button type="submit" className="act-btn login-btn" onClick={handleLogin}>Login</button>
                                <button type="button" className="act-btn cancel-btn" onClick={handleCancel}>Clear</button>
                            </div>
                            <div className="spe-contain otp-contain">
                                <Link to="/forgot-password" className="act-link"> Forgot Password? </Link>
                                <Link to="/register-user" className="act-link"> Not Registered </Link>
                            </div>
                        </form>
                    </div>
                </Col>
                <Col md={12} lg={4}></Col>
            </Row>
        </React.Fragment>
    )
}

export default Login;