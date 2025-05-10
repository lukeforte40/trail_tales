import styles from "../styles/pages/myTravelJournal.module.scss"
import { FaPlus } from "react-icons/fa6";

export default function Jorunal(){
    return(
        <div id={styles.journalContainers}>
            <h1 id={styles.TripTitle}>Your Trips</h1>
            <div className={styles.tripsContainer}>
                <div className={styles.tripContainer}>
                    <p><FaPlus id={styles.plus}/></p>
                </div>
            </div>
        </div>
    )
}