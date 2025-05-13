import styles from '../styles/pages/signup.module.scss';
import SignupForm from "../components/SignupForm";

export default function Signup(){
    return(
        <div id={styles.backgroundImage}>
            <SignupForm />
        </div>
    )
}