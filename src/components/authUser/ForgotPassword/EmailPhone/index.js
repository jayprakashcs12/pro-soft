import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router";

const EmailPhone = ({handleEmail}) => {

    let [email, setEmail] = useState("");
    
    let handleCancel = () => {
        setEmail("");
    };

    return (
        <React.Fragment>
            <div className="special-row">
                <form>
                    <Form.Group className="mb-3">
                        <Form.Label>e-Mail ID / Phone </Form.Label>
                        <Form.Control className="pro-form" type="email" placeholder="Enter Your e-Mail ID" 
                            value={email} onChange={(e) => setEmail(e.target.value)} autoFocus required />
                    </Form.Group>
                    <div className="spe-contain btn-contain">
                        <button type="submit" className="act-btn login-btn" onClick={handleEmail}>Send Phone</button>
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

export default EmailPhone;