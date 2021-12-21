import React from "react";
import style from "./Users.module.css";
import {NavLink} from "react-router-dom";
import userPhoto from "../../Assets/Images/user.jpg";


const UserItem = ({u, followingInProgress, unfollowUser, followUser}) => {
    return (
        <div key={u.id} className={style.userBody}>
            <div className={style.firstPart}>
                <div>
                    <NavLink to={"/profile/" + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} height="70px" alt=""/>
                    </NavLink>
                </div>
                <div>
                    {u.followed ?
                        <button disabled={followingInProgress.some(id => id === u.id)}
                                className={style.followState} onClick={() => {
                            unfollowUser(u.id)
                        }}>Unfollow</button> :
                        <button disabled={followingInProgress.some(id => id === u.id)}
                                className={style.followState} onClick={() => {
                            followUser(u.id)
                        }}>Follow</button>}
                </div>
            </div>
            <div className={style.secondPart}>
                <div className={style.userName}>
                    <span>{u.name}</span><br/>
                    <span>{u.status}</span>
                </div>
                <div className={style.userLocation}>
                    <span>{"u.location.city"} </span>
                    <span>{"u.location.country"}</span>
                </div>
            </div>
        </div>
    )
}

export default UserItem