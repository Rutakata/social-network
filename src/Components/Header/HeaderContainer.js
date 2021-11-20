import React from "react";
import * as axios from "axios";
import Header from "./Header";
import {getAuthUserData} from "../../Redux/authReducer";
import {connect} from "react-redux";
import {authApi} from "../../API/api";


class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state) => ({
    login: state.auth.login,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer)