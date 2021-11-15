import React, { useState, useEffect } from 'react'
import ActivityLinks from '../components/ActivityLinks.js';
import './ActivityPage.css';

export default function ActivityPage() {

    //grabs a list of possible activites and their IDs
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setState] = useState([]);

    useEffect(() => {
        fetch(`https://developer.nps.gov/api/v1/activities?limit=200&api_key=${process.env.REACT_APP_API_KEY}`)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result)
                    setIsLoaded(true);
                    const temp = [];
                    for (var i = 0; i < result.data.length; i++) {
                        const newActivity = { id: result.data[i].id, name: result.data[i].name }
                        temp[i] = newActivity
                    }
                    setState(temp);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(true);
                }
            )
    }, [])
    if (error) {
        return (
            <div>
                {window.location.href = '/404'}
            </div>
        )
    }
    else if (!isLoaded) {
        return <div>Loading...</div>
    }
    //sends the list to ActivityLinks to populate links to parks associated with that activity
    return (
        <div className = 'links'>
            {console.log(items)}
            {items.map((item) => (
                <ActivityLinks name = { item.name } id = {item.id}/>
            ))}
        </div>
    );
}