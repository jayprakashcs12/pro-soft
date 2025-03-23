import React from 'react';
import { Link } from 'react-router';

export default function Footer() {
    return (
        <React.Fragment>
            <div className="footer">
                <div className="contain">
                    <div className="footer-col">
                        <h1 className="footer-head">Company</h1>
                        <ul className="footer-ul">
                            <li className="footer-li"> <Link className="footer-link" to="/dashboard"> About </Link> </li>
                            <li className="footer-li"> <Link className="footer-link" to="/dashboard"> Mission </Link> </li>
                            <li className="footer-li"> <Link className="footer-link" to="/dashboard"> Services </Link> </li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h1 className="footer-head">Products</h1>
                        <ul className="footer-ul">
                            <li className="footer-li"> <Link className="footer-link" to="/dashboard"> About </Link> </li>
                            <li className="footer-li"> <Link className="footer-link" to="/dashboard"> Mission </Link> </li>
                            <li className="footer-li"> <Link className="footer-link" to="/dashboard"> Services </Link> </li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h1 className="footer-head">Accounts</h1>
                        <ul className="footer-ul">
                            <li className="footer-li"> <Link className="footer-link" to="/dashboard"> About </Link> </li>
                            <li className="footer-li"> <Link className="footer-link" to="/dashboard"> Mission </Link> </li>
                            <li className="footer-li"> <Link className="footer-link" to="/dashboard"> Services </Link> </li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h1 className="footer-head">Resources</h1>
                        <ul className="footer-ul">
                            <li className="footer-li"> <Link className="footer-link" to="/dashboard"> About </Link> </li>
                            <li className="footer-li"> <Link className="footer-link" to="/dashboard"> Mission </Link> </li>
                            <li className="footer-li"> <Link className="footer-link" to="/dashboard"> Services </Link> </li>
                        </ul>
                    </div>
                    <div className="clearfix"></div>
                </div>
            </div>
        </React.Fragment>
    )
}