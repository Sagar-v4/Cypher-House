import React, {
    useState
} from "react";
import './home.css';
import {
    FaFacebookSquare,
    FaInstagramSquare,
    FaYoutubeSquare,
} from "react-icons/fa";
import {
    GiHamburgerMenu
} from "react-icons/gi";
import {BsFillPersonFill} from "react-icons/bs"
import LoginModal from "./LoginModal";
import ContactUs from "./ContactUs";
import ProfileDropDown from "./ProfileDropDown";
import { Link, Route, Router, Routes } from "react-router-dom";
import AlgoList from "./AlgoList"
 const Home = () => {
     const [showMediaIcons, setShowMediaIcons] = useState(false);
     const [openModal, setOpenModal] = useState(false);
     const [openConnectUs, setOpenConnectUs] = useState(false);
    const [openProfileModal, setOpenProfileModal] = useState(false);
  return (
    <div>
     <nav className='main-nav'>
             <div className='logo'>
                < h2 > 
                <span>C</span>yper
                < span >H</span>ouse 
                </h2>
             </div>

             <div className = {
                 showMediaIcons ? "menu mobile-menu-link" : "menu"
             } >
                 {/* <Router>
                        <Link to = "/AlgoList" > Algorithms / API </Link>   
                </Router> */}
                 <ul>
                     <li>
                         {/* <a href='#'>Home</a> */}
                         <Link to = "/" > Home </Link>
                        
                    </li>
                    <li>
                        <Link to = "/algoList" > Algorithms / API </Link>
                         {/* <a href='./AlgoList.js'>Algorithms/API</a> */}
                        
                    </li>
                    <li>

                        < Link to = "/connect" className="OpenConnectUs" onClick={() =>{setOpenConnectUs(!openConnectUs);
                        }}> Connect With Us </Link>
                    </li>

                    <li className="login">
                         < a href = '#' className="OpenLoginModal" onClick={() =>{setOpenModal(!openModal);
                        }}
                        > LogIn </a>
                        
                    </li>
                 </ul>
             </div>
               <div className="profile-icon">
                <Link to="/" onClick={() => {setOpenProfileModal(!openProfileModal);}}><BsFillPersonFill className="profile"></BsFillPersonFill></Link>
                <div className="profile-drop-down">
                    {openProfileModal && <ProfileDropDown/>}
                </div>
               
               </div>
              

             


             <div className="social-media">
               <ul className="social-media-desktop">
                  <li>
                   <a
                    href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
                    target="_thapa">
                    <FaFacebookSquare className="facebook" />
                    </a>
                </li>
                <li>
                <a
                    href="https://www.instagram.com/thapatechnical/"
                    target="_thapa">
                    <FaInstagramSquare className="instagram" />
                </a>
                </li>
                <li>
                <a
                    href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
                    target="_thapa">
                    <FaYoutubeSquare className="youtube" />
              </a>
            </li>
          </ul>

          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>

     </nav>
     <div className="loginmodal">
        {openModal && <LoginModal closeModal={setOpenModal}/>}
     </div>
    
     {/* <section className='main-section'>
         {openModal && <LoginModal closeModal={setOpenModal}/>}
          {openConnectUs && <ContactUs closeConnectModal={setOpenConnectUs}/>}
     </section> */}
    </div>
  )
}


export default Home