import React from 'react';
import { Link } from "react-router-dom";
import './Navigation.css';

function Navigation() {
    return (
        <div className="nav">
            {/* Link가 아닌 html의 <a href= 을 쓴다면 page가 매번 react 죽이고 refresh됨 */}
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </div>
    )
}

export default Navigation;
