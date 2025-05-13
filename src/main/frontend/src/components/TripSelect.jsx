import { GoPlus } from "react-icons/go";
import { Tooltip } from 'react-tooltip'
import styles from "../styles/components/tripSelect.module.scss"

export default function TripSelect(){
    return(
        <>
            <h1 id={styles.TripTitle}>Your Trips</h1>
            <div className={styles.tripsContainer}>
                <Tooltip anchorSelect="#startTrip" place="top" id={styles.toolTip}>
                    Create a new trip
                </Tooltip>
                <a className={styles.tripContainer} id="startTrip">
                    <GoPlus id={styles.plus}/>
                </a>
            </div>
        </>
    )
}