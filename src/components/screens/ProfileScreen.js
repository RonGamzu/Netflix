import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import { auth } from "../../firebase";
import Nav from "../../Nav";
import "./ProfileScreen.css";

function ProfileScreen() {
  const user = useSelector(selectUser);

  return (
    <div className="profile-screen">
      <Nav />
      <div className="profile-screen-body">
        <h1>Edit Profile</h1>
        <div className="profile-screen-info">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt=""
          />
          <div className="profile-screen-details">
            <h2>{user.email}</h2>
            <div className="profile-screen-plans">
              <button
                onClick={() => auth.signOut()}
                className="profile-screen-sign-out"
              >
                Sign out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
