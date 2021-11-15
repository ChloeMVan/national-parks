import React from 'react'
import './Header.css';
import { Link } from "react-router-dom";
import { Button } from '../components/Button';

const Header = () => {
    return (
        <div className = 'header'>
            <Link to="/national-parks">
                <Button onClick={() => {console.log("Clicked") }}
                    type="button"
                    buttonSize="btn--title-size"
                    buttonStyle="btn--title"
                >National Parks</Button>
            </Link>  
            <p1>Discover Something New!</p1> 
        </div>
    )
}

export default Header