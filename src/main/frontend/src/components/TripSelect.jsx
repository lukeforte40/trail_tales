import { GoPlus } from "react-icons/go";
import { Tooltip } from 'react-tooltip'
import styles from "../styles/components/tripSelect.module.scss";
import CreateTripForm from '../components/CreateTripForm';
import React, { useEffect, useState } from "react";
import tripService from "../services/trip.service";
import { userContext } from '../main';
import {  useNavigate } from 'react-router-dom';

export const tripContext = React.createContext(null);

export default function TripSelect(){
    const [createOpen, setCreateOpen] = useState(false);
    const [trips, setTrips] = useState([]);
    const { user } = React.useContext(userContext);
    const navigate = useNavigate();

    // function to fetch trips from database
    async function fetchTrips(){
        const data = await tripService.getUserTrips(user.id);
        setTrips(data);
    }

    // Fetch trips from database on load
    useEffect(() => {
        // if not signed in navigate to login
        if (user === null) {
            navigate('/login');
        }
        fetchTrips();
    },[])

    // Render trip list
    const TripList = trips.map((trip) =>(
        <>
            <Tooltip anchorSelect={"#" + trip.id} place="top" className={styles.toolTip}>
                {trip.Title}
            </Tooltip>
            <a className={styles.tripContainer} key={trip.id} id={trip.id}>
                <img src={require("../../../resources/static/upload/" + trip.tripImage)} alt={trip.title} className={styles.tripImg}/>
            </a>
        </>
    ))

    return(
        <>
            <h1 id={styles.TripTitle}>Your Trips</h1>
            <div className={styles.tripsContainer}>
                <Tooltip anchorSelect="#startTrip" place="top" className={styles.toolTip}>
                    Create a new trip
                </Tooltip>
                <a className={styles.tripContainer} id="startTrip" onClick={() => setCreateOpen(!createOpen)}>
                    <GoPlus id={styles.plus}/>
                </a>
                {trips !== null ? TripList : <p>No trips created! Start one now!</p>}
            </div>
            <tripContext.Provider value={{ trips, setTrips }}>
                {createOpen && <CreateTripForm user_id={user.id} />}
            </tripContext.Provider>
        </>
    )
}