import styles from "../styles/pages/myTravelJournal.module.scss"
import { GoPlus } from "react-icons/go";
import { Tooltip } from 'react-tooltip'

export default function Jorunal(){
    return(
        <div id={styles.journalContainers}>
            <h1 id={styles.TripTitle}>Your Trips</h1>
            <div className={styles.tripsContainer}>
                <Tooltip anchorSelect="#startTrip" place="top" id={styles.toolTip}>
                    Add a trip
                </Tooltip>
                <a className={styles.tripContainer} id="startTrip">
                    <GoPlus id={styles.plus}/>
                </a>
            </div>
        </div>
    )
}