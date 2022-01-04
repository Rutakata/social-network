import React from "react";
import Pagination from "./Pagination";
import UserItem from "./UserItem";
import style from "./Users.module.css"


let Users = (props) => {
    return <div className={style.usersPageBody}>
        <Pagination totalUsersCount={props.totalUsersCount} pageSize={props.pageSize}
                    onPageChanged={props.onPageChanged} currentPage={props.currentPage}/>
        {
            props.users.map(user => {
                return <UserItem u={user} followingInProgress={props.followingInProgress}
                                 unfollowUser={props.unfollowUser} followUser={props.followUser} key={user.id}/>
            })
        }

    </div>
}

export default Users