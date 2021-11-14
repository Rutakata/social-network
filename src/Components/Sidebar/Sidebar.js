import Friend from "./Friend/Friend";
import style from "./Sidebar.module.css"

const SideBar = () => {
    return(
        <aside className={style.content}>
            <h1>Мої друзі</h1>
            <Friend />
            <Friend />
            <Friend />
        </aside>
    )
}

export default SideBar
