import React, { useState, useEffect } from "react";
import styles from '../styles/components/createTripForm.module.scss';
import tripService from "../services/trip.service";
import uploadService from "../services/upload-service";
import { tripContext } from './TripSelect';

export default function CreateTripForm({ user_id }){
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    const [picture, setPicture] = useState(undefined);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const formData = new FormData();
    const { trips, setTrips } = React.useContext(tripContext);

    // reset error after a certain amount of time

    useEffect(() =>{
        setTimeout(() => {setError(null)}, 10000);
    },[error])

    // create trip function
    
    const handleSubmit = async (e) =>{
        e.preventDefault();

        // set submit to loading and disable another click
        setLoading(true);
        document.getElementById('submitButton').disabled = true;

        // upload img
        formData.append("image", picture);
        const imgResponse = await uploadService.Image(formData);                

        // create trip
        try {
            const trip = await tripService.createTrip(title, description, user_id, startDate, endDate, imgResponse);
            console.log(trip);
            let tripData = [...trips];
            tripData.push(trip);
            console.log(tripData);
            setTrips(tripData);
        } catch {
            setError("There was an error! Please try again.");
        }

        // reset loading, button disable, close form and reset values
        
        setLoading(false);
        document.getElementById('submitButton').disabled = false;
    }

    return(
        <form onSubmit={(e) => handleSubmit(e)}>
            {error !== null && <p id={styles.error}>{error}</p>}
            <input type="text" name="title" id={styles.title} onChange={(e) => setTitle(e.target.value)} required/>
            <input type="text" name="description" id={styles.description} onChange={(e) => setDescription(e.target.value)} required/>
            <input type="date" name="startDate" id="startDate" onChange={(e) => setStartDate(e.target.value)} required/>
            <input type="date" name="endDate" id="endDate" onChange={(e) => setEndDate(e.target.value)} required/>
            <input id={styles.picInput} accept="image/*" type="file" onChange={(e) => setPicture(e.target.files[0])} required/>
            <button id="submitButton" className={styles.submitButton} type="submit">{loading ? "Loading..." : "Create Trip"}</button>
        </form>
    )
}