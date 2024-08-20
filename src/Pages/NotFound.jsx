import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/g1g.png";
import './NotFound.css';

export default function NotFound() {
    return (
        <div className="error-main">
            <div className="error-img">
            <img src={logo} alt="" style={{ width: "75%", height: "100%"}} />
            </div>
            <Link to={"/"}>
                <div className="btn">Back to Home </div>
            </Link>
        </div>
    );
}