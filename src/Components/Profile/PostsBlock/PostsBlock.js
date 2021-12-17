import React from "react";
import PostItem from "./PostItem/PostItem";
import PostReduxForm from "./PostForm";

const PostsBlock = React.memo((props) => {
    let throwPostMessages = props.postMessages.map(ms => {
        return (<PostItem message={ms.message}/>)
    })

    const onPostChange = (values) => {
        props.addNewPost(values.postText)
    }
    debugger
    return (
        <div>
            <p><b>Коментарі</b></p>

            {props.showPostForm ? <PostReduxForm onSubmit={onPostChange}/>: null}

            {throwPostMessages}
        </div>
    )
})

export default PostsBlock
