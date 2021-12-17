import PostsBlockContainer from "./PostsBlock/PostsBlockContainer";
import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import style from "./Profile.module.css"
import Preloader from "../../Common/Preloader/preloader";


const Profile = (props) => {
    if (!props.profileInfo){
        return (
            <Preloader />
        )
    }
    return (
        <div className={style.content}>
            <ProfileInfo profileInfo={props.profileInfo} status={props.status} updateStatus={props.updateStatus}/>
            <div className={style.commentsBlock}>
                <PostsBlockContainer showPostForm={props.showPostForm}/>
            </div>
        </div>
    )
}

export default Profile
