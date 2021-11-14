import React from "react";
import PostItem from "./PostItem/PostItem";
import style from "./PostsBlock.module.css";
import {addNewPostActionCreator, updatePostMessageActionCreator} from "../../../Redux/profileReducer";


const PostsBlock = (props) => {
    let throwPostMessages = props.postMessages.map(ms => {return (<PostItem message={ms.message}/>)})

    let newPostText = React.createRef()

    let addPost = () => {
        props.addNewPost()
    }

    let onPostChange = () => {
        let postText = newPostText.current.value
        props.updatePostMessage(postText)
        //props.dispatch(updatePostMessageActionCreator(postText))
    }

    return (
        <div>
            <p><b>Коментарі</b></p>
                <textarea onChange={onPostChange} className={style.enterPost}
                          ref={newPostText} value={props.newPostMessage}/><br/>
                <button className={style.sendPost} onClick={addPost}>Написати</button>
            {throwPostMessages}
        </div>
    )
}

export default PostsBlock
