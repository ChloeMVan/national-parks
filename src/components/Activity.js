import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import ParkInformation from './ParkInformation';
import './Activity.css';

const Activity = () => {
    //breaks up the location to get the name and id of the activity
    const location = useLocation();
    const breakPath = (path) => {
        const idAndName = [];
        var pathSplit = path.split('/')
        if (pathSplit.length > 3) {
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

    //using the id, this gets all the parks(and their needed data) associated with that id
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setState] = useState([]);
    var url = `https://developer.nps.gov/api/v1/activities/parks?id=` + data[0] + `&api_key=${process.env.REACT_APP_API_KEY}`
    console.log(url)
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    const temp = [];
                    for (var i = 0; i < result.data[0].parks.length; i++) {
                        const newPark = {
                            fullName: result.data[0].parks[i].fullName, parkCode: result.data[0].parks[i].parkCode,
                            parkUrl: result.data[0].parks[i].url
                        }
                        temp[i] = newPark
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
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        )
    }
    //sends list of parks to ParkInformation to populate links 
    return (
        <div className='activity'>
            <h1>{data[1]}</h1>
            <div className='container'>
                {items.map((item) => (
                    <ParkInformation fullName={item.fullName} parkCode={item.parkCode} parkUrl={item.parkUrl} />
                ))}

            </div>
        </div>
    )
}

export default Activity
