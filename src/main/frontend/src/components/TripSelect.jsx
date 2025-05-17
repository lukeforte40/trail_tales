import { GoPlus } from "react-icons/go";
import { Tooltip } from 'react-tooltip'
import styles from "../styles/components/tripSelect.module.scss";
import CreateTripForm from '../components/CreateTripForm';
import React, { useEffect, useState } from "react";
import tripService from "../services/trip.service";
import { userContext } from '../main';
import {  useNavigate } from 'react-router-dom';
import authService from "../services/auth.service";

export const tripContext = React.createContext(null);

export default function TripSelect(){
    const [createOpen, setCreateOpen] = useState(false);
    const [trips, setTrips] = useState([]);
    const { user, setUser } = React.useContext(userContext);
    const navigate = useNavigate();

    // function to fetch trips from database
    async function fetchTrips(){
        const userData = await authService.getCurrentUser();
        setUser(userData);
        if (userData === null) {
            navigate('/login');
        }else{
            const data = await tripService.getUserTrips(userData.id);
            setTrips(data);
        }
    }

    // Fetch trips from database on load
    useEffect(() => {
        fetchTrips();
    },[])

    // Render trip list
    const TripList = trips.map((trip) =>(
        <div key={trip.id}>
            <a className={styles.tripContainer} data-tooltip-id="tripTip" data-tooltip-content={trip.title}>
                <img src={require("../../../resources/static/upload/" + trip.tripImage)} alt={trip.title} className={styles.tripImg}/>
            </a>
        </div>
    ))

    return(
        <>
            <h1 id={styles.TripTitle}>Your Trips</h1>
            <div className={styles.tripsContainer}>
                <a className={styles.tripContainer} data-tooltip-content="Create a new trip!" data-tooltip-id="tripTip" onClick={() => setCreateOpen(!createOpen)}>
                    <GoPlus id={styles.plus}/>
                </a>
                {trips !== null ? TripList : <p>No trips created! Start one now!</p>}
            </div>
            <tripContext.Provider value={{ trips, setTrips }}>
                {createOpen && <CreateTripForm user_id={user.id} />}
            </tripContext.Provider>
            <Tooltip place="top" id="tripTip" style={{
            backgroundColor: 'gray',
            borderRadius: '10px',
            fontSize: '1.25em'
            }}/>
        </>
    )
}