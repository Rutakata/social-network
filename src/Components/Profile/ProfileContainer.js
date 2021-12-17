import React from "react";
import Profile from "./Profile";
import {getUserProfile, getStatus, updateStatus} from "../../Redux/profileReducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";
import {getProfileInfo, getLoggedUserId, getStatusFromState} from "../../Redux/profileSelectors";


class ProfileContainer extends React.Component {
    showPostForm = false

    componentDidMount() {
        let userId = this.props.match.params.userId

        if (!userId) {
            userId = this.props.loggedUserId
            this.showPostForm = true
        }

        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profileInfo={this.props.profileInfo} status={this.props.status}
                         updateStatus={this.props.updateStatus} showPostForm={this.showPostForm}/>
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    profileInfo: getProfileInfo(state),
    status: getStatusFromState(state),
    loggedUserId: getLoggedUserId(state)
})

export default compose(withAuthRedirect, withRouter, connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}))(ProfileContainer)