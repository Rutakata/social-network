import React from "react";
import Profile from "./Profile";
import {getUserProfile, getStatus, updateStatus} from "../../Redux/profileReducer";
import {connect} from "react-redux";
import {Redirect, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId

        if (!userId) {
            userId = 20490
        }

        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }
    onSubmit(formData) {
        console.log(formData)
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profileInfo={this.props.profileInfo} status={this.props.status}
                         updateStatus={this.props.updateStatus} onSubmit={this.onSubmit}/>
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    profileInfo: state.profilePage.profileInfo,
    status: state.profilePage.status
})

export default compose(withAuthRedirect, withRouter, connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}))(ProfileContainer)