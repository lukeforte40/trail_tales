import { useState } from "react"

const baseurl = "http://localhost:8080/api"

export default function Signup(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [picture, setPicture] = useState(undefined);

    const handleSubmit = async (e) =>{
        let body = {};
        if (picture !== undefined) {
             body = {
                "email": email,
                "password": password,
                "phone": phone,
                "profilePic":picture.name
            }
        }
        else{
            body = {
                "email": email,
                "password": password,
                "phone": phone,
                "profilePic":"null"
            }
        }
        const signup = await fetch(
            `${baseurl}/signup`,
            {
                method:"POST",
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization":"Basic " + btoa('user:Password')
                },
                body: JSON.stringify(body)
            }
        )
        if (signup.ok) {
            console.log("success")
        }
        else{
            console.error(signup);
        }
    }

    return(
        <div>
            <h1>Sign up</h1>
            <form>
                <label>Email</label>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <label>Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <label>Phone Number</label>
                <input type="phone" value={phone} onChange={(e) => setPhone(e.target.value)}/>
                <label>Profile Pic</label>
                <input type="file" value={picture} onChange={(e) => setPicture(e.target.files[0])}/>
                <button type="button" onClick={() => handleSubmit()}>Sign up</button>
            </form>
        </div>
    )
}