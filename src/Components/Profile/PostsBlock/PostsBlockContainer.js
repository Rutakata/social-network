import PostsBlock from "./PostsBlock";
import {addNewPost} from "../../../Redux/profileReducer";
import {getUserFullName, getPostMessages, getNewPostMessage} from "../../../Redux/profileSelectors";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        postMessages: getPostMessages(state),
        newPostMessage: getNewPostMessage(state)
    }
}

const PostsBlockContainer = connect(mapStateToProps, {addNewPost})(PostsBlock)

export default PostsBlockContainer