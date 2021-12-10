import style from "../Chats.module.css";
import React from "react";
import { reduxForm, Field } from "redux-form";


const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component="textarea" className={style.messageText} name="newMessage" placeholder="Enter the message"/>
            <button className={style.sendMessage}>Написати</button>
        </form>
    )
}

const AddMessageReduxForm = reduxForm({form: "addMessage"})(AddMessageForm)

export default AddMessageReduxForm
