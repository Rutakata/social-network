import PostsBlockContainer from "./PostsBlock/PostsBlockContainer";
import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import style from "./Profile.module.css"


const Profile = (props) => {
    return (
        <div className={style.content}>
            <ProfileInfo profileInfo={props.profileInfo}/>
            <div className={style.commentsBlock}>
                <PostsBlockContainer />
            </div>
        </div>
    )
}

export default Profile
