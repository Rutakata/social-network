import React from "react";
import Profile from "./Profile";
import {getUserProfile} from "../../Redux/profileReducer";
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
    }

    render() {
        if (!this.props.isAuth) {
            return <Redirect to="/login" />
        }
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

export default compose(withAuthRedirect, withRouter, connect(mapStateToProps, {getUserProfile}))(ProfileContainer)