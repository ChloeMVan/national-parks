import React from 'react'
import ParkPageCamLink from '../components/ParkPageCamLink';
import "./ParkCamPage.css";

const ParkCamPage = (props) => {
    //no web cam associated with park
    if (props.title === undefined) {
        return (
            <div className='noCams'>
                <h1>No Webcams Available</h1>
            </div>
        )
    }
    //park has a webcame but doesn't have images
    //ParkPageCamLink is used to set up a link to actual webcam on website
    else if (props.images.length === 0) {
        return (
            <div className='hasNoImages'>
                <h1>{props.title}</h1>
                <h>No Available Photos</h>
                <div className='text'>
                    <p>{props.description}</p>
                    <ParkPageCamLink url ={props.url} title = {props.title}/>
                </div>
            </div>
        )
    }
    else {
        //park ahs a webcam and images
        return (
            <div className='hasImage'>
                <h1>{props.title}</h1>
                {console.log(props.images)}
                {props.images.map((image) => (
                    <img src={image.url} alt={image.altText}></img>
                ))}
                <div className='text'>
                    <p>{props.description}</p>
                    <ParkPageCamLink url ={props.url} title = {props.title}/>
                </div>
            </div>
        )
    }

}

export default ParkCamPage
