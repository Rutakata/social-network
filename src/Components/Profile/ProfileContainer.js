import React from "react";
import Profile from "./Profile";
import {setUserProfile} from "../../Redux/profileReducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {getUserById, usersApi} from "../../API/api";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId

        if (!userId) {
            userId = 7628
        }

        usersApi.getUserById(userId).then(response => {
            this.props.setUserProfile(response.data)
        })
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

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent)