import React from "react";
import PostItem from "./PostItem/PostItem";
import PostReduxForm from "./PostForm";
import style from "./PostsBlock.module.css"

const PostsBlock = React.memo((props) => {
    let throwPostMessages = props.postMessages.map(ms => {
        return (<PostItem message={ms.message} userFullName={props.userFullName}/>)
    })

    const onPostChange = (values) => {
        props.addNewPost(values.postText)
    }

    return (
        <div className={style.postsContent}>
            <h2>Думки</h2>

            {props.showPostForm ? <PostReduxForm onSubmit={onPostChange}/>: null}

            {throwPostMessages}
        </div>
    )
})

export default PostsBlock
