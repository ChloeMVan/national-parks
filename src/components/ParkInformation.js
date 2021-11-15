import React from 'react'
import { Button } from '../components/Button';

const ParkInformation = (props) => {
    return (
        <div>
            <Button onClick={function() {window.location.href = props.parkUrl} }
                type="button"
                buttonSize="btn--link--size"
                buttonStyle="btn--link"
            >{props.fullName}</Button>
        </div>
    )
}

export default ParkInformation
