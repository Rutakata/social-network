import {NavLink} from "react-router-dom";
import style from "./Header.module.css"
import logo from "../../Assets/Images/logo.png"

const Header = (props) => {
    return(
        <header>

            <NavLink to="/profile" className={style.headerMenu} activeClassName={style.activeLink}><img src={logo} alt="logo"/></NavLink>
            <ul>
                <li><NavLink to="/profile" className={style.headerMenu} activeClassName={style.activeLink}>Моя сторінка</NavLink></li>
                <li><NavLink to="/messages" className={style.headerMenu} activeClassName={style.activeLink}>Повідомлення</NavLink></li>
                <li><NavLink to="/users" className={style.headerMenu} activeClassName={style.activeLink}>Користувачі</NavLink></li>
                <li><NavLink to="/settings" className={style.headerMenu} activeClassName={style.activeLink}>Налаштування</NavLink></li>
                {props.isAuth ?
                    <li className = {style.headerMenu}>{props.login}</li>:
                    <li><NavLink to="/login" className={style.headerMenu} activeClassName={style.activeLink}>Login</NavLink></li>
                }
            </ul>
        </header>
    )
}

export default Header