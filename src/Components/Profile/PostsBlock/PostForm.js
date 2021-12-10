import React from "react";
import { reduxForm, Field } from "redux-form";
import style from "./PostsBlock.module.css"


const PostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component="textarea" name="postText" placeholder="Your post" className={style.enterPost}/>
            <button className={style.sendPost}>Send</button>
        </form>
    )
}

const PostReduxForm = reduxForm({form: "post"})(PostForm)

export default PostReduxForm