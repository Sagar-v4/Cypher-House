import React from 'react'

function UpdatePassModal() {
  return (
    <div>
      <div class="update-pass-container">

        <fieldset>
            <legend>Update Password</legend>

            <form method="post">

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
  )
}

export default UpdatePassModal
