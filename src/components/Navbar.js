import { Outlet, Link} from "react-router-dom";

const Navbar = () => {
    return (
        <>
        <nav style={{ backgroundColor: 'black' , width: '100%', margin: 0, padding: '20px'}}>
            <ul style={{ listStyleType: 'none', display: 'flex', justifyContent: 'space-around', padding: 0 }}>
                <li><Link to="/">Kurt</Link></li>
                <li><Link to="/ellis">Ellis</Link></li>
                <li><Link to="/clyde">Clyde</Link></li>
                <li><Link to="/jan">Jan</Link></li>
                <li><Link to="/arjay">Arjay</Link></li>
                <li><Link to="/von">Von</Link></li>
            </ul>
        </nav>
         <Outlet />
        </>
    )
};

export default Navbar;
