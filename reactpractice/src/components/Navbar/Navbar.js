import React from 'react';
import "./Navbar.css";

const Navbar = props => (

    <nav className="navbar">
        <ul>
            <li className="brand">
                <a className="logo" href="/">Oh,Baby!</a>
            </li>
            <li className="correctOrNot">{props.correctOrNot}
            </li>
            <li className="score">Score: {props.score} | Top Score: {props.topScore}</li>
        </ul>
    </nav>
    // <nav className="navbar-fixed">

    //         <div className="nav-wrapper container">
    //             <a href="/" className="logo left">Oh, Baby!</a>
    //             <ul className="right" style={{listStyleType:"none"}}>
    //                 <li>Score: {props.score} | Top Score: {props.topScore}</li>
    //             </ul>
    //         </div>
    //     </nav>


)

export default Navbar;
