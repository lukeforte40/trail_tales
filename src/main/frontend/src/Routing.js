import { Route, Routes  } from 'react-router';

// Page imports
import Signup from './pages/signup'

export default function Routing(){
    return(
        <Routes>
            <Route path="/signup" element={<Signup/>}/>
        </Routes>
    )
}