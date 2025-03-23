import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router";
import EmailPhone from "./EmailPhone";
import NewPass from "./NewPass";

const ForgotPassword = () => {

    let [showLogEmail, setShowLogEmail] = useState(true);
    let [showNewPass, setShowNewPass] = useState(false);
    let navigate = useNavigate();

    let handleEmail = () => {
        setShowNewPass(true);
        setShowLogEmail(false);
    };

    return (
        <React.Fragment>
            <Row className="justify-content-center special-container">
                <Col md={12} lg={4}></Col>
                <Col md={12} lg={4}>
                    {showLogEmail && 
                        <>
                            <EmailPhone handleEmail={handleEmail} /> 
                        </>
                    }

                    {showNewPass && 
                        <>
                            <NewPass navigate={navigate} /> 
                        </>
                    }
                </Col>
                <Col md={12} lg={4}></Col>
            </Row>
        </React.Fragment>
    );
};

export default ForgotPassword;