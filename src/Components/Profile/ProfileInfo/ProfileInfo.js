import React from "react";
import style from "./ProfileInfo.module.css";
import userPhoto from "../../../Assets/Images/userLogo.png"
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

let ProfileInfo = (props) => {
    return (
        <div>
            <div className={style.content}>
                <div className={style.userLogo}>
                    <img src={props.profileInfo.photos.large ? props.profileInfo.photos.large: userPhoto} className={style.avatar} alt={""}/>
                </div>
                <div className={style.userInfo}>
                    <h1 className={style.username}>{props.profileInfo.fullName}</h1>
                    <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} changeStatus={props.changeStatus}/>
                </div>
            </div>
            {
                !props.profileInfo.aboutMe ? null: <div className={style.aboutMe}>
                    <h2>About me</h2>
                    <p>- {props.profileInfo.aboutMe}</p>
                </div>
            }

        </div>
    )
}

export default ProfileInfo