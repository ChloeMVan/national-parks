import React from 'react'
import { Link } from "react-router-dom";
import { Button } from '../components/Button';

const ParkCamLinks = (props) => {
    return (
        <nav>
            <Link to={'/parkList/' + props.parkCode + '/' + props.fullName}>
                <Button onClick={console.log("Clicked")}
                    type="button"
                    buttonSize="btn--link--size"
                    buttonStyle="btn--link"
                >{props.fullName}</Button>
            </Link>
        </nav>
    )
}
export default ParkCamLinks
