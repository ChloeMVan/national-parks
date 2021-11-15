import React from 'react'
import { Link } from "react-router-dom";
import { Button } from '../components/Button';

const ActivityLinks = (props) => {
    return (
        <nav>
            <Link to={'/activity/' + props.id + '/' + props.name}>
                <Button onClick={console.log("Clicked")}
                    type="button"
                    buttonSize="btn--link--size"
                    buttonStyle="btn--solid"
                >{props.name}</Button>
            </Link>
        </nav>
    )
}

export default ActivityLinks

