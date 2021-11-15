import React, { useState, useEffect } from 'react'
import ParkCamPage from '../Pages/ParkCamPage';
import { useLocation } from 'react-router-dom'

export default function GetParkCam() {
    //breaks up the location to get the name and code for this park
    const location = useLocation();
    const breakPath = (path) => {
        const idAndName = [];
        var pathSplit = path.split('/')
        if (pathSplit.length >=4) {
            var nameSplit = pathSplit[3].split('%20')
            var nameConnect = "";
            for (var i = 0; i < nameSplit.length; i++) {
                nameConnect = nameConnect + nameSplit[i] + " "
            }
            idAndName[0] = pathSplit[2]
            idAndName[1] = nameConnect
            return idAndName
        }
        else {
            window.location.href = '/404'
        }
    }
    var data = breakPath(location.pathname)

    //using the parkCode, this grabs the webcam information associated with this park
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setState] = useState([]);
    var url = `https://developer.nps.gov/api/v1/webcams?parkCode=` + data[0] + `&api_key=${process.env.REACT_APP_API_KEY}`
    console.log(url)

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result)
                    setIsLoaded(true);
                    const temp = [];
                    for (var i = 0; i < result.data.length; i++) {
                        const newParkCam = { title: result.data[i].title, description: result.data[i].description, 
                            images: result.data[i].images, url: result.data[i].url }
                        temp[i] = newParkCam
                    }
                    setState(temp);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(true);
                }
            )
    }, [url]);
    if (error) {
        return (
            <div>
                {window.location.href = '/404'};
                Error: {"There was a problem"};
            </div>
        )
    }
    else if (!isLoaded) {
        return <div>Loading...</div>
    }
    if(items.length === 0){
        return(<ParkCamPage />)
    }
    //sends list of park webcams to ParkCamPage to create a page
    //showing data associated with the webcams
    return (
        <div>
            {items.map((item) => (
                <ParkCamPage title = {item.title} description = {item.description} 
                images = {item.images} url = {item.url} fullName = {data[1]}/>
            ))}
        </div>
    )
}


