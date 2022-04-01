import React from 'react'
import Home from './home';

function ChangePassword() {
  return (
    <div>
        <Home></Home>
      <div class="Pass-container">

        <fieldset>
            <legend>Change Password</legend>

            <form method="post">

                <div>
                    <input type="password" id="opwd" placeholder="Old Password" name="opwd" required/>
                </div>

                <div>
                    <input type="password" id="pwd" placeholder="New Password" name="pwd" required/>
                </div>

                <div>
                    <input type="password" id="cpwd" placeholder="Confirm password" name="cpwd" required/>
                </div>

                <div class="row">
                    <div class="col">
                        <input type="submit" value="Submit" onclick="check()"/>
                    </div>
                    <div class="col">
                        <input type="reset" value="Cancel"/>
                    </div>
                </div>

            </form>

        </fieldset>

    </div>
    </div>
  );
}

function check() {
    var pwd = document.getElementById("pwd").value;
    var cpwd = document.getElementById("cpwd").value;
    //password expression code
    var pwd_expression = /^(?=.?[A-Z])(?=.?[a-z])(?=.?[0-9])(?=.?[#?!@$%^&*-])/;

    if (!pwd_expression.test(pwd)) {
        alert('Upper case, Lower case, Special character and Numeric letter are required in Password filed');
        pwd.focus();
    } else if (pwd != cpwd) {
        alert('Both password are not matched');
        cpwd.focus();
    } else if (document.getElementById("pwd").value.length < 6) {
        alert('Password minimum length is 6');
        pwd.focus();
    } else if (document.getElementById("pwd").value.length > 12) {
        alert('Password max length is 12');
        pwd.focus();
    } else {
        //Here we will check old password was correct or not.
        alert('Password updated successfull !!');
    }
}
export default ChangePassword
