import styles from "../styles/pages/myTravelJournal.module.scss"
import { GoPlus } from "react-icons/go";

export default function Jorunal(){
    return(
        <div id={styles.journalContainers}>
            <h1 id={styles.TripTitle}>Your Trips</h1>
            <div className={styles.tripsContainer}>
                <div className={styles.tripContainer}>
                    <GoPlus id={styles.plus}/>
                </div>
            </div>
        </div>
    )
}