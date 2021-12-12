import React from "react";
import { reduxForm, Field } from "redux-form";
import style from "./PostsBlock.module.css"
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../../Common/FormControls/FormControls";

let maxLength = maxLengthCreator(200)

const PostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} name="postText" placeholder="Your post" className={style.enterPost}
                   validate={[required, maxLength]}/>
            <div>
                <button className={style.sendPost}>Send</button>
            </div>
        </form>
    )
}

const PostReduxForm = reduxForm({form: "post"})(PostForm)

export default PostReduxForm