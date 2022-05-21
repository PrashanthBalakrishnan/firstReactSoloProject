import React from "react";
import ProfilePic from "../images/ProfilePicture.JPG"
import "../style.css"


export default function Header() {
    return (
        <>
            <img src={ProfilePic} alt="ProfilePicture" className="profilePic" />
            <h1 className="name">Prashant Balakrishnan</h1>
            <h3 className="Ocupation">Fontend Developer</h3>
            <h5 className="website=">prashanth.website</h5>
            <div className="Buttons">
                <h3 className="email--button">Email</h3>
                <h3 className="linkedin--button">LinkedIn</h3>
            </div>

        </>
    )
}