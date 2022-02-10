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
        <div className={style.userPage}>
            <ProfileInfo profileInfo={props.profileInfo} status={props.status} updateStatus={props.updateStatus}
                         changeStatus={props.changeStatus}/>
            <div className={style.commentsBlock}>
                <PostsBlockContainer showPostForm={props.showPostForm} userFullName={props.profileInfo.fullName}/>
            </div>
        </div>
    )
}

export default Profile
