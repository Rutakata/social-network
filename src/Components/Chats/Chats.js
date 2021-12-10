import Message from "./Message/Message";
import React from "react";
import UsersChat from "./UsersChat/UsersChat";
import style from "./Chats.module.css"
import AddMessageReduxForm from "./UsersChat/AddMessageForm";


const Chats = (props) => {
    let throwUser = props.users.map(u => {
        return (<UsersChat username={u.username} chatid={u.id}/>)
    })
    let throwMessage = props.messages.map(m => {
        return (<Message message={m.message}/>)
    })

    let sendNewMessage = (values) => {
        props.sendNewMessage(values.newMessage)
    }

    return (
        <div className={style.content}>
            <div className={style.users}>
                {throwUser}
            </div>
            <div className={style.userChat}>
                {throwMessage}
                <AddMessageReduxForm onSubmit={sendNewMessage}/>
            </div>
        </div>

    )
}

export default Chats