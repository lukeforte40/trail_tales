import styles from "../styles/pages/myTravelJournal.module.scss"
import TripSelect from '../components/TripSelect';

export default function Jorunal(){
    return(
        <div id={styles.journalContainers}>
            <TripSelect />
        </div>
    )
}