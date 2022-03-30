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
import LoginModal from "./LoginModal";
import ContactUs from "./ContactUs";

const Home = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [openConnectUs, setOpenConnectUs] = useState(false);
  return (
    <div>
      <nav className='main-nav'>
        <div className='logo'>
          < h2 >
            <span>C</span>yper
            < span >H</span>ouse
          </h2>
        </div>

        <div className={
          showMediaIcons ? "menu mobile-menu-link" : "menu"
        } >
          <ul>
            <li>
              <a href='#'>Home</a>

            </li>
            <li>
              <a href='#'>Algorithms/API</a>

            </li>
            <li>
              <a href='#' className="OpenConnectUs" onClick={() => {
                setOpenConnectUs(true);
              }}
              >Connect With Us</a>

            </li>

            <li className="login">
              < a href='#' className="OpenLoginModal" onClick={() => {
                setOpenModal(true);
              }}
              > LogIn </a>

            </li>
          </ul>
        </div>





        <div className="social-media">
          <ul className="social-media-desktop">

            <li>
              {/* <a
                    href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
                    target="_thapa">
                    <FaFacebookSquare className="facebook" />
                    </a> */}
            </li>
            <li>
              {/* <a
                    href="https://www.instagram.com/thapatechnical/"
                    target="_thapa">
                    <FaInstagramSquare className="instagram" />
                </a> */}
            </li>
            <li>
              {/* <a
                    href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
                    target="_thapa">
                    <FaYoutubeSquare className="youtube" />
              </a> */}
            </li>
          </ul>

          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>

      </nav>
      <section className='main-section'>
        {openModal && <LoginModal closeModal={setOpenModal} />}
        {openConnectUs && <ContactUs closeConnectModal={setOpenConnectUs} />}

        {/* <h1>Welcome to cyper house</h1> */}
      </section>
    </div>
  )
}
export default Home