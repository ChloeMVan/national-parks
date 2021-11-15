import React, { useState, useEffect } from 'react'
import ParkCamLinks from './ParkCamLinks.js';
import { Button } from './Button';
import './LiveParkList.css'

export default function LiveParkList(props) {

    //start is used to keep track of which parks are being rendered
    // intially the first 200 and then changed according to the Prev and Next Buttons
    const [start, setStart] = useState(0)
    const decrement = () => {
        if (start > 0) {
            setStart(start - 100)
        }
    }
    const increment = () => {
        if (start < 400) {
            setStart(start + 100)
        }
    }
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setState] = useState([]);
    var url = `https://developer.nps.gov/api/v1/parks?limit=100&start=` + start + `&api_key=${process.env.REACT_APP_API_KEY}`
    console.log(url)

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    const temp = [];
                    for (var i = 0; i < result.data.length; i++) {
                        const newPark = { fullName: result.data[i].fullName, parkCode: result.data[i].parkCode }
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
        return <div> Error: There is a problem</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>
    }
    else {
        //sends list of parks to ParkCamLinks to populate links 
        return (
            <div className='page'>
                {items.map((item) => (
                    <ParkCamLinks fullName={item.fullName} parkCode={item.parkCode} />
                ))}
                <div className='buttons'>

                    <Button onClick={(
                    ) => { decrement() }}
                        type="button"
                        buttonSize="btn--small"
                        buttonStyle="btn--outline"
                    >Prev</Button>

                    <Button onClick={() => { increment() }}
                        type="button"
                        buttonSize="btn--small"
                        buttonStyle="btn--outline"
                    >Next</Button>

                    <div className='backtToTop'>
                        <Button onClick={() => {
                            window.scrollTo({
                                top: 0,
                                behavior: "smooth"
                              });
                        }}
                            type="button"
                            buttonSize="btn--small"
                            buttonStyle="btn--outline"
                        >Back To The Top</Button>

                    </div>
                </div>
            </div>
        );
    }
}
