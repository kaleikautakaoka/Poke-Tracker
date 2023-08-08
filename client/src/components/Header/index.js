import * as React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import './Header.css';

const Header = () => {
    const logout = (event) => {
      event.preventDefault();
      Auth.logout();
    };
return ( 
    <header className="display-flex align-center">
        <div>
            <Link to="/">
                Home
            </Link>
                <span role="img" aria-label="home">🏠</span>
            <Link to="/login">
                <span role="img" aria-label="login">👨‍💻</span>
                Login
            </Link>
            <Link to="/signup">

            </Link>
            <Link to="/donate">
                <span role="img" aria-label="donate">🤑</span>
                Donate
            </Link>
            </div>
            <div>
            {Auth.loggedIn() ? (
                <>
                <Link className= "btn" to="/me">
                    {Auth.getProfile().data.username}'s profile
                </Link>
                    <span role="img" aria-label="profile">🚹</span>
                    <button onClick={logout}>Logout</button>
                </>
            ) : (
                <>
                <Link className="btn" to="/login">
                    Login
                </Link>
                <Link className="btn" to="/signup">
                    Signup
                </Link>
                </>
            )}
            <Link className="btn" to="/donate">
                Donate
            </Link>
            <Link className="btn" to="/contact">
                Contact
            </Link>
            </div>
    </header>
);
};

export default Header;
    