import React from "react";
import style from "../PostsBlock.module.css";

let Post = (props) => {
    return (
        <div className={style.comment}>
            Me <br/>
            {props.message}
        </div>
    )
}

export default Post