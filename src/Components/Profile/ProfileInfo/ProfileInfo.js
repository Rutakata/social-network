import React from "react";
import style from "../Profile.module.css";
import userPhoto from "../../../Assets/Images/user.jpg"
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

let ProfileInfo = (props) => {
    return (
        <div>
            <h1>{props.profileInfo.fullName}</h1>
            <img src={props.profileInfo.photos.large ? props.profileInfo.photos.large: userPhoto} className={style.avatar} alt={""}/>
            <p>{!props.profileInfo.aboutMe ? "i am empty" : props.profileInfo.aboutMe}</p>
            <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
        </div>
    )
}

export default ProfileInfo