import {followUser, unfollowUser, setCurrentPage, getUsers} from "../../Redux/usersReducer";
import {connect} from "react-redux";
import React from "react";
import Users from "./Users";
import Preloader from "../../Common/Preloader/preloader";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (page) => {
        this.props.setCurrentPage(page)
        this.props.getUsers(page, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize}
                   onPageChanged={this.onPageChanged} currentPage={this.props.currentPage}
                   users={this.props.users} unfollowUser={this.props.unfollowUser}
                   followUser={this.props.followUser}
                   followingInProgress={this.props.followingInProgress}/>
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

/*let mapDispatchToProps = (dispatch) => {
    return {
        followUser: (userID) => {
            dispatch(followUserAC(userID))
        },
        unfollowUser: (userID) => {
            dispatch(unfollowUserAC(userID))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount))
        },
        setCurrentPage: (page) => {
            dispatch(setCurrentPageAC(page))
        },
        toggleFetching: (isFetching) => {
            dispatch(toggleFetchingAC(isFetching))
        }
    }
}*/

export default connect(mapStateToProps, {
    followUser, unfollowUser, setCurrentPage, getUsers})(UsersContainer)
