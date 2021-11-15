import React from 'react'
import { Link } from "react-router-dom";
import { Button } from '../components/Button';
import './Home.css';

function Home() {
    return (
        <div className = 'home'> 
        <nav>
            <Link to="/activity">
                <Button onClick={() => { console.log("Clicked") }}
                    type="button"
                    buttonSize="btn--large"
                    buttonStyle="btn--outline--white"
                >Find Activities</Button>
                
            </Link>
            <Link to="/parkList">
                <Button onClick={() => { console.log("Clicked") }}
                    type="button"
                    buttonSize="btn--large"
                    buttonStyle="btn--outline--white"
                >Park Webcams</Button>
            </Link>
        </nav>
        </div>
    );
}

export default Home
