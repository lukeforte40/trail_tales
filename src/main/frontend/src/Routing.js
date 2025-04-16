import { Route, Routes  } from 'react-router';

// Page imports
import Signup from './pages/signup';
import Login from './pages/login';

export default function Routing(){
    return(
        <Routes>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/login" element={<Login/>}/>
        </Routes>
    )
}