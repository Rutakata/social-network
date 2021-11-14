import React from "react";
import style from "./Users.module.css";
import userPhoto from "../../Assets/Images/user.jpg";
import {NavLink} from "react-router-dom";
import {usersApi} from "../../API/api";


let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
        <div className={style.pageList}>
            {pages.map(page => {
                if (page < 10) {
                    return <span onClick={() => {
                        props.onPageChanged(page)
                    }} className={props.currentPage === page && style.currentPage}>{page}</span>
                } else if (page === 2000) {
                    return <span onClick={() => {
                        props.onPageChanged(page)
                    }} className={props.currentPage === page && style.currentPage}>{page}</span>
                }
            })}
        </div>
        {
            props.users.map(u => {
                return (
                    <div key={u.id} className={style.userBody}>
                        <div className={style.firstPart}>
                            <div>
                                <NavLink to={"/profile/" + u.id}>
                                    <img src={u.photos.small != null ? u.photos.small : userPhoto} height="70px" alt={}/>
                                </NavLink>
                            </div>
                            <div>
                                {u.followed ?
                                    <button disabled={props.followingInProgress.some(id => id === u.id)} className={style.followState} onClick={() => {
                                        props.toggleFollowingProgress(true, u.id)
                                        usersApi.unfollowUserReq(u.id).then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.unfollowUser(u.id)
                                            }
                                            props.toggleFollowingProgress(false, u.id)
                                        })
                                    }}>Unfollow</button> :
                                    <button disabled={props.followingInProgress.some(id => id === u.id)} className={style.followState} onClick={() => {
                                        props.toggleFollowingProgress(true, u.id)
                                        usersApi.followUserReq(u.id).then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.followUser(u.id)
                                            }
                                            props.toggleFollowingProgress(false, u.id)
                                        })
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
            })
        }
    </div>
}

export default Users