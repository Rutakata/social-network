import {NavLink} from "react-router-dom";
import style from "./UsersChat.module.css"

const UsersChat = (props) => {
    return (
        <div className={style.selectedUsers}>
            <NavLink to={"/messages/" + props.chatid} activeClassName={style.activeLink}>{props.username}</NavLink>
        </div>
    )
}

export default UsersChat