import { GoPlus } from "react-icons/go";
import { Tooltip } from 'react-tooltip'
import styles from "../styles/components/tripSelect.module.scss";
import CreateTripForm from '../components/CreateTripForm';
import { useState } from "react";

export default function TripSelect(){
    const [createOpen, setCreateOpen] = useState(false);
    return(
        <>
            <h1 id={styles.TripTitle}>Your Trips</h1>
            <div className={styles.tripsContainer}>
                <Tooltip anchorSelect="#startTrip" place="top" id={styles.toolTip}>
                    Create a new trip
                </Tooltip>
                <a className={styles.tripContainer} id="startTrip" onClick={() => setCreateOpen(!createOpen)}>
                    <GoPlus id={styles.plus}/>
                </a>
            </div>
            {createOpen && <CreateTripForm />}
        </>
    )
}