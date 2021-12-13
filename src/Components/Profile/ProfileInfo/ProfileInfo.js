import React from "react";
import style from "../Profile.module.css";
import Preloader from "../../../Common/Preloader/preloader";
import userPhoto from "../../../Assets/Images/user.jpg"
import ProfileStatus from "./ProfileStatus";

let ProfileInfo = (props) => {
    return (
        <div>
            <h1>{props.profileInfo.fullName}</h1>
            <img src={props.profileInfo.photos.large ? props.profileInfo.photos.large: userPhoto} className={style.avatar}/>
            <p>{!props.profileInfo.aboutMe ? "i am empty" : props.profileInfo.aboutMe}</p>
            <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
        </div>
    )
}

export default ProfileInfo