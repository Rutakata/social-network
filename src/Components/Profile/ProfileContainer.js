import React from "react";
import Profile from "./Profile";
import {getUserProfile} from "../../Redux/profileReducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {usersApi} from "../../API/api";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId

        if (!userId) {
            userId = 20490
        }

        this.props.getUserProfile(userId)
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profileInfo={this.props.profileInfo}/>
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    profileInfo: state.profilePage.profileInfo
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent)