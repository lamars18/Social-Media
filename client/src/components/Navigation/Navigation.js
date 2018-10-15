import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Navigation = props => {
    const { branding } = props;

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark py-0">
        <div className="container">
            <a href="/" className="navbar-brand">
                {branding}
            </a>
            <div>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">
                            <i className="fas fa-home" /> Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/login" className="nav-link">
                            <i className="fas fa-sign-in-alt" /> Login
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/register" className="nav-link">
                            <i className="fas fa-user-plus" /> Sign-up
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link">
                            <i className="fas fa-question" /> About
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
        </nav>
    );
};

Navigation.defaultProps = {
    branding: 'My App'
};

Navigation.propTypes = {
    branding: PropTypes.string.isRequired
};

export default Navigation;