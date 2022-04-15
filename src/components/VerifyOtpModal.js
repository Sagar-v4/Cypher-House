
import React, {
    useEffect,
    useState
} from "react";
import UpdatePassModal from "./UpdatePassModal";
function VerifyOtpModal() {
    
    let timerOn = true;
  const timer = (remaining) => {
             document.getElementById('hide').style.visibility = "hidden";
             var m = Math.floor(remaining / 60);
             var s = remaining % 60;

             m = m < 10 ? '0' + m : m;
             s = s < 10 ? '0' + s : s;
             document.getElementById('timer').innerHTML = m + ':' + s;
             remaining -= 1;

             if (remaining >= 0 && timerOn) {
                 setTimeout(function () {
                     timer(remaining);
                 }, 1000);
                 return;
             }

             if (!timerOn) {
                 return;
             }
             document.getElementById('hide').style.visibility = "visible";
            //  alert('Timeout for otp');
  }

  useEffect(() => {
    timer(60);
  }, [])
  const [openUpdatePassModal, setUpdatePassOpenModal] = useState(false);
    return (
    <div>
      <div class="verify-otp-container">

        <fieldset>
            <legend>Enter OTP</legend>

            <form method="post">

                <div>
                    <input type="text" placeholder="Enter OTP" name="otp" required/>
                </div>

                <div class="time-row">
                    <div class="time-col">
                        Time left = <span id="timer"></span>
                    </div>
                    <div class="col">
                        <input id="hide" type="submit" value="Re-send" onclick={() =>{timer(60);
                        }} />
                    </div>
                </div>

                <div class="row">
                    <div class="col">
                        <input type="submit" value="Verify"/>
                    </div>
                    <div class="col">
                        <input type="reset" value="Cancel"/>
                    </div>
                </div>

            </form>

        </fieldset>

    </div>
    

    </div>
  )
}

export default VerifyOtpModal
