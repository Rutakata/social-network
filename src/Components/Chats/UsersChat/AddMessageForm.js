import style from "../Chats.module.css";
import React from "react";
import { reduxForm, Field } from "redux-form";
import {Textarea} from "../../../Common/FormControls/FormControls";
import {maxLengthCreator, required} from "../../../utils/validators/validators";


let maxLength = maxLengthCreator(200)

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} className={style.messageText} name="newMessage" placeholder="Enter the message"
                       validate={[required, maxLength]}/>
            </div>
            <div>
                <button className={style.sendMessage}>Send</button>
            </div>
        </form>
    )
}

const AddMessageReduxForm = reduxForm({form: "addMessage"})(AddMessageForm)

export default AddMessageReduxForm
