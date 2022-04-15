import React, {
    useState
} from "react";
import Home from './home';
import './home.css';
import VerifyOtpModal from "./VerifyOtpModal";

function ForgotPassword() {
    const [openOtpModal, setOtpOpenModal] = useState(false);
    return (
    <div>
        <Home> </Home>
      <div class="forgot-container">

        <fieldset>
            <legend className='forgot-title'>Enter your email</legend>

            <form method="post">

                <div>
                    <input type="email" placeholder="Enter email" name="email" required/>
                </div>

                <div class="row">
                    <div class="col">
                        <input type="submit" value="Send OTP" onClick={() =>{setOtpOpenModal(!openOtpModal);
                        }}/>
                    </div>
                    <div class="col">
                        <input type="reset" value="Cancel"/>
                    </div>
                </div>

            </form>

        </fieldset>

    </div>
     <div className="verifyOtpModal">
        {openOtpModal && <VerifyOtpModal closeModal={setOtpOpenModal}/>}
     </div>
    </div>
  )
}

export default ForgotPassword
