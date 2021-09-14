import classes from './Navbar.module.css'


const NavBar = () => {
    return ( 
        <div className={classes.NavBar}>
        <nav>
            <ul> 
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/#teams">Teams</a>
                </li>
                <li>
                    <a href="/#agent">Free Agents</a>
                </li>
                <li>
                    <a href="/#create">Create A Team</a>
                </li>
                <li>
                    <a href="/#free">Become A Free Agent</a>
                </li>
            </ul>
        </nav>
    </div>
   
    );
}
 
export default NavBar;
