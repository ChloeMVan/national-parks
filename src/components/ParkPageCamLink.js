import React from 'react'
import { Button } from './Button';
import './ParkPageCamLink.css'

const ParkPageCamLink = (props) => {
    return (
        <div className = 'link'>
            <Button onClick={function() {window.location.href = props.url} }
                type="button"
                buttonSize="btn--link--size"
                buttonStyle="btn--link"
            >{props.title} Web Cam</Button>
        </div>
    )
}

export default ParkPageCamLink