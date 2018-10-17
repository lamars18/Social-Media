import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import "./Navigation.css"

const Navigation = props => {
    const { branding } = props;

    return (
        <nav id="main-nav" className="navbar navbar-expand-sm app-bg-color-3 py-0 px-5 app-color-1">
            {/* <div className="container"> */}
                <a href="/" className="navbar-brand app-color-1">
                    {branding}
                </a>
                <div className="ml-auto">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link app-color-1">
                                <i className="fas fa-home" /> Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link app-color-1">
                                <i className="fas fa-question" /> About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/login" className="nav-link app-color-1">
                                <div className="btn app-btn-primary">
                                    <i className="fas fa-sign-in-alt" /> Login
                                </div>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/register" className="nav-link app-color-1">
                                <div className="btn app-btn-primary">
                                    <i className="fas fa-user-plus" /> Sign-up
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>
            {/* </div> */}
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