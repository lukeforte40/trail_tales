import { NavLink } from "react-router"
import styles from "../styles/components/nav.module.scss"
import { RxHamburgerMenu } from "react-icons/rx";
import { useLocation } from 'react-router-dom';

export default function Nav() {
    const location = useLocation();
    
    // Rotate hamburger and open nav menu
    const handleHamburgerClick = () => {
        if (window.getComputedStyle(document.getElementById('navLinks', null)).display === "none") {
            document.getElementById("navLinks").style.display = "flex";
            document.getElementById("hamburger").style.transform = "rotate(90deg)";
        }
        else{
            document.getElementById("navLinks").style.display = "none";
            document.getElementById("hamburger").style.transform = "rotate(0deg)";
        }
    }

    return(
        <nav>
            <div id={styles.upperNav}>
                <NavLink id={styles.logo} to="/">Trail Tales</NavLink>
                <div id={styles.loginSignupContainer}>
                    {location.pathname !== "/login" && <NavLink to="/login">Login</NavLink>}
                    {location.pathname !== "/signup" && <NavLink to="/signup">Sign Up</NavLink>}
                </div>
            </div>
            <div id={styles.lowerNav}>
                <RxHamburgerMenu className={styles.hamburger} id="hamburger" onClick={handleHamburgerClick}/>
                <div className={styles.navLinks} id="navLinks">
                    {location.pathname !== "/travelJournal" && <NavLink to="/travelJournal">My Travel Journal</NavLink>}
                </div>
            </div>
        </nav>
    )
}