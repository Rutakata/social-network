import React from "react";
import style from "./PostItem.module.css";

let Post = (props) => {
    return (
        <div>
            <div className={style.userComment}>
                <span className={style.username}>{props.userFullName}</span><br/>
                <span>{props.message}</span>
            </div><br/>
        </div>

    )
}

export default Post