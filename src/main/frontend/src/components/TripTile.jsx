import styles from "../styles/components/tripTile.module.scss";
import { IoIosClose } from "react-icons/io";

export default function TripTile({id, title, contentStart, contentClick, activeId, open, close}){
    return(
        <div key={id} onClick={open} className={styles.tripContainer} id={id}>
            <a data-tooltip-id="tripTip" data-tooltip-content={title}>
                {id === activeId && <IoIosClose id={styles.close} onClick={close}/>}
                {id !== activeId && contentStart}
                {id === activeId && contentClick}
            </a>
        </div>
    )
} 