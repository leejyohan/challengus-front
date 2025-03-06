import React from "react";
import "../css/BottomNav.css";
import { House, UserRound, SquareCheckBig } from 'lucide-react'
import { Link } from "react-router-dom";

const BottomNav = () => {
    return (
        <nav className="wrapper">
            <Link to="/write" className="nav-link">
                <div><SquareCheckBig /></div>
            </Link>
            <Link to="/Home" className="nav-link">
                <div><House /></div>
            </Link>
            <Link to="/mypage" className="nav-link">
                <div><UserRound /></div>
            </Link>
        </nav>
    );
};

export default BottomNav;