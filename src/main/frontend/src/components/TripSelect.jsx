import { GoPlus } from "react-icons/go";
import { Tooltip } from 'react-tooltip'
import styles from "../styles/components/tripSelect.module.scss";
import CreateTripForm from '../components/CreateTripForm';
import React, { act, useEffect, useState } from "react";
import tripService from "../services/trip.service";
import { userContext } from '../main';
import {  useNavigate } from 'react-router-dom';
import authService from "../services/auth.service";
import TripTile from "./TripTile";

export const tripContext = React.createContext(null);

export default function TripSelect(){
    const [trips, setTrips] = useState([]);
    const { user, setUser } = React.useContext(userContext);
    const navigate = useNavigate();
    const [activeId, setActiveId] = useState(null);

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
        <TripTile id={trip.id} title={trip.title} contentStart={
            <img src={require("../../../resources/static/upload/" + trip.tripImage)} alt={trip.title} className={styles.tripImg}/>
        } contentClick={
            <p>test</p>
        }  activeId={activeId} open={() => handleOpen(trip.id)} close={() => handleClose(trip.id)}/>
    ))

    // function to handle the opening of trip tile
    const handleOpen = (id) =>{
        if (id !== activeId) {
            document.getElementById(id).style.width = "100%";
            document.getElementById(id).style.height = "400px";
            document.getElementById(id).style.position = "absolute";
            document.getElementById(id).style.zIndex = "10";
            document.getElementById(id).style.gridColumnStart = "1";
            setActiveId(id);
        }
    }
    
    // function to handle closing of trip tile
    const handleClose = (id) =>{
        document.getElementById(id).style.width = "120px";
        document.getElementById(id).style.height = "175px";
        document.getElementById(id).style.position = "relative";
        document.getElementById(id).style.zIndex = "1";
        setActiveId(null);
    }


    return(
        <>
            <h1 id={styles.TripTitle}>Your Trips</h1>
            <div className={styles.tripsContainer}>
                <TripTile id={"createTripForm"} title={"Create a new trip!"} contentStart={
                    <GoPlus id={styles.plus}/>
                } contentClick={
                    <tripContext.Provider value={{ trips, setTrips }}>
                        <CreateTripForm user_id={user.id} />
                    </tripContext.Provider>
                } activeId={activeId} open={() => handleOpen("createTripForm")} close={() => handleClose("createTripForm")}/>
                {trips !== null ? TripList : <p>No trips created! Start one now!</p>}
            </div>
            <Tooltip place="top" id="tripTip" style={{
            backgroundColor: 'gray',
            borderRadius: '10px',
            fontSize: '1.25em'
            }}/>
        </>
    )
}