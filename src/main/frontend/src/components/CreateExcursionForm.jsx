import React, { useState, useEffect } from "react";
import styles from '../styles/components/createExcursionForm.module.scss';
import tripService from "../services/trip.service";

export default function CreateExcursionForm({ trip_id, excursions, setExcursions }) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [title, setTitle] = useState('');
    const [notes, setNotes] = useState('');
    const [photo, setPhoto] = useState(undefined);
    const [location , setLocation] = useState('');
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();

    // Create excursion function

    const handleSubmit = async (e) => {
        // prevent default form action
        e.preventDefault();

        // set submit to loading and disable another click
        setLoading(true);
        document.getElementById('submitButton').disabled = true;

        // TODO: add image/ video upload

        // TODO: fetch longitude and latitude from location

        // create excursion
        try {
            // FIXME: Add longitude and latitude
            const excursion = await tripService.createTripExcursion(title, notes, photo, trip_id, 1, 1, startDate, endDate);
            let excursionData = [...excursions];
            excursionData.push(excursion);
            setExcursions(excursionData);
        } catch {
            setError("There was an error! Please try again.");
        }

        // reset loading, button disable, close form and reset values
        setLoading(false);
        document.getElementById('submitButton').disabled = false;

    }

    // reset error after a certain amount of time

    useEffect(() =>{
        setTimeout(() => {setError(null)}, 10000);
    },[error])

    return(
        <form onSubmit={(e) => handleSubmit(e)}>
            {error !== null && <p id={styles.error}>{error}</p>}
            <label htmlFor="title">Title</label>
            <input type="text" name="title" id="title" onChange={(e) => setTitle(e.target.value)} required/>
            <label htmlFor="notes">Notes</label>
            <textarea name="notes" id="notes" cols="20" rows="1" onChange={(e) => setNotes(e.target.value)} required></textarea>
            <label htmlFor="photo">Photos or Videos</label>
            {/* TODO: add ability to add multiple images or videos and add preview*/}
            <input type="file" name="photo" id="photo" accept="image/*, video/*"  onChange={(e) => setPhoto(e.target.files[0])}/>
            <label htmlFor="location">Location</label>
            {/* TODO: add location adding ability search bar and map*/}
            <input type="text" name="location" id="location" onChange={(e) => setLocation(e.target.value)} />
            <label htmlFor="startDate">Start Date</label>
            <input type="date" name="startDate" id="startDate" onChange={(e) => setStartDate(e.target.value)} required/>
            <label htmlFor="endDate">End Date</label>
            <input type="date" name="endDate" id="endDate" onChange={(e) => setEndDate(e.target.value)} required/>
            <button id="submitButton" className={styles.submitButton} type="submit">{loading ? "Loading..." : "Create Excursion"}</button>
        </form>
    )
}