import React from "react";
import ProfilePic from "../images/ProfilePicture.JPG"


export default function Info() {
    return (
        < div className="container">
            <img src={ProfilePic} alt="ProfilePicture" className="profilePic" />
            <div className="profile-info">
                <h1 className="name">Prashant Balakrishnan</h1>
                <h3 className="ocupation">Fontend Developer</h3>
                <h5 className="website">prashanth.website</h5>
                <div className="buttons">
                    <h3 className="email--button">Email</h3>
                    <h3 className="linkedin--button">LinkedIn</h3>
                </div>

            </div>

        </div>
    )
}