import React from "react";
import PostItem from "./PostItem/PostItem";
import style from "./PostsBlock.module.css";


const PostsBlock = (props) => {
    let throwPostMessages = props.postMessages.map(ms => {return (<PostItem message={ms.message}/>)})

    let newPostText = React.createRef()

    let onPostChange = () => {
        let postText = newPostText.current.value
        props.updatePostMessage(postText)
    }

    return (
        <div>
            <p><b>Коментарі</b></p>
                <textarea onChange={onPostChange} className={style.enterPost}
                          ref={newPostText} value={props.newPostMessage}/><br/>
                <button className={style.sendPost} onClick={props.addNewPost}>Написати</button>
            {throwPostMessages}
        </div>
    )
}

export default PostsBlock
