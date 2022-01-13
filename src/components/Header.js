import React from 'react';
import { Link } from 'react-router-dom';
import "../App.css";

const Header = () => {
    return (
        <div className="header">
            <center>
                <h1>Pokédex</h1>
                <h2>Gotta Catch em All</h2>
                <div className="navlinks">
                    <Link to="/myteam" style={{textDecoration: "none"}}>
                        <div className="navlink">My Team</div>
                    </Link>
                    <Link to="/" style={{textDecoration: "none"}}>
                        <div className="navlink">Home</div>
                    </Link>
                </div>
                <h6>&copy; Anthony Lofredo 2022 </h6>
            </center>
        </div>
    )
};

export default Header