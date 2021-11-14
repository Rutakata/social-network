import PostsBlock from "./PostsBlock";
import {addNewPostActionCreator, updatePostMessageActionCreator} from "../../../Redux/profileReducer";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        postMessages: state.profilePage.postMessages,
        newPostMessage: state.profilePage.newPostMessage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updatePostMessage: (postText) => {
            dispatch(updatePostMessageActionCreator(postText))
        },
        addNewPost: () => {
            dispatch(addNewPostActionCreator())
        }
    }
}

const PostsBlockContainer = connect(mapStateToProps, mapDispatchToProps)(PostsBlock)

export default PostsBlockContainer