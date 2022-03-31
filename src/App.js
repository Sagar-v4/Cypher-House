import React from 'react'
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
const App = () => {
    return (
        
            <Router>
            <Routes>

            <Route path='/' exact element={<Home/>}/>    
           <Route path='/algolist' element={<AlgoList/>}/>

            </Routes>
            </Router>
            
           
           
        
        // <AlgoList></AlgoList>
        // <Router>
        //     <Home> </Home>
        //  <Routes>
        //     <Route path = "./components/AlgoList" element = {<AlgoList/>}/>
        // </Routes>
        // </Router>
        
            
    );
    
};
export default App;
