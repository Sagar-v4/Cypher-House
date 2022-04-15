import React from 'react'

function EditProfilePic() {
  return (
    <div>
      <div class="edit-profile-pic-container">

            <fieldset>
                <legend>Profile picture</legend>

                <form method="post">

                    <div class="row">
                        <img src="" alt="show img here"/>
                    </div>

                    <div>
                        <label for="img">Select image:</label>
                        <input type="file" id="img" name="img" accept="image/*"/>
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

export default EditProfilePic
