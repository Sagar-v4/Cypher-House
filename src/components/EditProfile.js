import React from 'react'
import './home.css';

function EditProfile() {
  return (
    <div>
      <div class="edit-profile-container">

            <fieldset>
                <legend>Profile information</legend>

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
                        <label name="genders" for="genders">Gender:</label>
                    </div>

                    <div class="row">
                        <div class="col">
                            <input class="gender" type="radio" id="male" name="genders" value="male" required/>
                            <label for="male">Male</label>
                        </div>
                        <div class="col">
                            <input class="gender" type="radio" id="female" name="genders" value="female"/>
                            <label for="female">Female</label>
                        </div>
                        <div class="col">
                            <input class="gender" type="radio" id="other" name="genders" value="other"/>
                            <label for="other">Others</label>
                        </div>
                    </div>

                    <div>
                        <input type="date" required></input>
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

export default EditProfile
