import React from "react";
import PostItem from "./PostItem/PostItem";
import PostReduxForm from "./PostForm";

const PostsBlock = (props) => {
    let throwPostMessages = props.postMessages.map(ms => {return (<PostItem message={ms.message}/>)})

    let newPostText = React.createRef()

    let onPostChange = (values) => {

        props.addNewPost(values.postText)
    }

    return (
        <div>
            <p><b>Коментарі</b></p>
            <PostReduxForm onSubmit={onPostChange}/>

            {throwPostMessages}
        </div>
    )
}

export default PostsBlock
