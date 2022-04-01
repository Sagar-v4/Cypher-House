import React from 'react'
import Home from './home';
import './home.css';

function ContactUs({closeConnectModal}) {
  return (
    <div>
        <Home></Home>
      <div class="container">
            {/* <div className='ContactCloseBtn'>
               <button onClick={() => closeConnectModal(false)}> X </button>
          </div> */}
            <fieldset>
                <legend>Contact information</legend>

                <form method="post">

                    <div class="row">
                        <div class="col">
                            <input type="text" placeholder="First name" required/>
                        </div>
                        <div class="col">
                            <input type="text" placeholder="Last name"/>
                        </div>
                    </div>

                    <div>
                        <input type="email" placeholder="E-mail" required/>
                    </div>

                    <div>
                        <input type="text" placeholder="Subject" required/>
                    </div>

                    <div>
                        <textarea rows="3" placeholder="Message" required></textarea>
                    </div>

                    <div class="row">
                        <div class="col">
                            <input type="submit" value="Submit"/>
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

export default ContactUs
