import React, { useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router";
import { Form } from "react-bootstrap";

const NewPass = () => {

    let [showNewPass, setShowNewPass] = useState(false);
    let [otp, setOtp] = useState("");
    let [pass, setPass] = useState("");
    let navigate = useNavigate();

    let verifyPass = () => {
        navigate("/");
    };

    let handleCancel = () => {
        setOtp("");
        setPass("");
    };

    return (
        <React.Fragment>
            <div className="special-row">
                <form>
                    <Form.Group className="mb-3">
                        <Form.Label>OTP Number</Form.Label>
                        <Form.Control className="pro-form" type="tel" placeholder="Enter Your OTP Number" 
                            value={otp} onChange={(e) => setOtp(e.target.value)} autoFocus required />
                    </Form.Group>
                    <Form.Group className="mb-3 password-container">
                        <Form.Label>New Password</Form.Label>
                        <Form.Control className="pro-form" type={showNewPass ? "text" : "password"} placeholder="Enter Your New Password"
                            value={pass} onChange={(e) => setPass(e.target.value)} required />
                        <span className="toggle-icon" onClick={() => setShowNewPass((prev) => !prev)}>
                            {showNewPass ? <IoEyeOffOutline /> : <IoEyeOutline />}
                        </span>
                    </Form.Group>
                    <div className="spe-contain btn-contain">
                        <button type="submit" className="act-btn login-btn" onClick={verifyPass}>Reset</button>
                        <button type="button" className="act-btn cancel-btn" onClick={handleCancel}>Clear</button>
                    </div>
                    <div className="spe-contain user-contain">
                        <Link to="/" className="act-link"> Remember Password? </Link> 
                    </div>
                </form>
            </div>
        </React.Fragment>
    );
};

export default NewPass;