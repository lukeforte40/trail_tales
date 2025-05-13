import styles from '../styles/pages/login.module.scss';
import LoginForm from '../components/LoginForm';

export default function Login(){

    return(
        <div id={styles.backgroundImage}>
            <LoginForm/>
        </div>
    )
}