import React from 'react'
import {
    useState
} from "react";
import Home from './components/home'
import AlgoList from './components/AlgoList'
import {
    Link,
    Route,
    BrowserRouter as 
    Router,
    Routes,
    Switch
} from "react-router-dom";
import AddAdmin from './components/AddAdmin';
import ChangePassword from './components/ChangePassword';
import ContactUs from './components/ContactUs';
const App = () => {
    const [openConnectUs, setOpenConnectUs] = useState(false);
    return (
        
            <Router>
            <Routes>

            <Route path='/' exact element={<Home/>}/>    
           <Route path='/algolist' element={<AlgoList/>}/>
            <Route path='/connect' element={<ContactUs/>}/>
           <Route path='/addAdmin' element={<AddAdmin/>}/>
           <Route path='/changePassword' element={<ChangePassword/>}/>

            </Routes>
            </Router>
            
    );
    
};
export default App;
