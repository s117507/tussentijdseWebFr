import { NavItems } from "../routes/Routes";
import { NavLink } from "react-router";
import styles from "./Navbar.module.css"

export default function Navbar() {
    return(
        <nav>
            <ul className={styles.navbar}>
                {NavItems.map((link) => (
                    <li key={link.to}><NavLink to={link.to}>{link.label}</NavLink></li>
                ))}
            </ul>
        </nav>
    )
}