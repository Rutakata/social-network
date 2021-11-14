import React from "react";
import style from "../Profile.module.css";
import Preloader from "../../../Common/Preloader/preloader";

let ProfileInfo = (props) => {
    if (!props.profileInfo){
        return (
            <Preloader />
        )
    }

    return (
        <div>
            <h1>{props.profileInfo.fullName}</h1>
            <img src={props.profileInfo.photos.large}/>
            <p>{!props.profileInfo.aboutMe ? "i am empty" : props.profileInfo.aboutMe}</p>
        </div>
    )
}

export default ProfileInfo