import Friend from "./Friend/Friend";
import style from "./Sidebar.module.css"
import {connect} from "react-redux";


const SideBar = (props) => {
    if (props.isAuth === true) {
        return (
            <aside className={style.content}>
                <h1>Мої друзі</h1>
                <Friend/>
                <Friend/>
                <Friend/>
            </aside>
        )
    }else {
        return null
    }
}


let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps)(SideBar)
