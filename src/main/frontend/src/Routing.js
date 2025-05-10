import { Route, Routes  } from 'react-router';

// Page imports
import Signup from './pages/signup';
import Login from './pages/login';
import Jorunal from './pages/myTravelJournal';

export default function Routing(){
    return(
        <Routes>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/travelJournal" element={<Jorunal/>}/>
        </Routes>
    )
}