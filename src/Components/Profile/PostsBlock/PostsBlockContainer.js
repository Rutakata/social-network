import PostsBlock from "./PostsBlock";
import {addNewPost} from "../../../Redux/profileReducer";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        postMessages: state.profilePage.postMessages,
        newPostMessage: state.profilePage.newPostMessage
    }
}

const PostsBlockContainer = connect(mapStateToProps, {addNewPost})(PostsBlock)

export default PostsBlockContainer