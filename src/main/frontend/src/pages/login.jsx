import { useState } from "react"

export default function Login(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        
    }

    return(
        <div>
            <form>
                <label>Email or Username:</label>
                <input type="text" onChange={(e) => setUsername(e.target.value)}/>
                <label>Password:</label>
                <input type="text" onChange={(e) => setPassword(e.target.value)}/>
                <button type="button">Login</button>
            </form>
        </div>
    )
}