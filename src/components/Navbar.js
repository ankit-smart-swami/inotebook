import React, { useContext, useEffect } from 'react'
import './Navbar.css';
import logo from '../Assets/logo512.png';
import { Link, useLocation } from 'react-router-dom';
import userContext from '../context/Auth/userContext';


const Navbar = () => {
    let location = useLocation();
    const { userLogout, userName, fetchUserDetails } = useContext(userContext);
    const authToken = localStorage.getItem('auth-token');
    useEffect(() => {
        fetchUserDetails();
    }, [])


    return (
        <>
            <nav className="bg-dark border-bottom border-bottom-dark" data-bs-theme="dark">
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid container flex-center">
                        <Link to="/" className='flex-center nav-brand'>
                            <img src={logo} alt='nav-logo' className='nav-logo' />
                            <h3 className="nav-title">iNoteBook</h3>
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" style={{ 'width': '100%' }} id="navbarNavAltMarkup">
                            <div className="navbar-nav nav-items container flex-center" style={{ 'width': '100%' }}>
                                <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} aria-current="page" to="/">Home</Link>
                                <Link className={`nav-link ${location.pathname === '/fetures' ? 'active' : ''}`} to="/fetures">Features</Link>
                                <Link className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`} to="/contact">Contact</Link>
                                {(authToken === '') && <div className='d-flex flex-around align-items-center' style={{ 'width': '25%' }}>
                                    <Link className="btn btn-sm btn-outline-success" to="/login">Login</Link>
                                    <Link className="btn btn-sm btn-outline-success" to="/signup">SignUp</Link>
                                </div>}
                                {(authToken !== '') && <div className='d-flex align-items-center flex-around' style={{ 'width': '25%' }}>
                                    <div style={{ 'color': "white" }}>Hii, {userName}</div>
                                    <Link className="btn btn-sm btn-outline-success" to="/login" onClick={userLogout}>Logout</Link>
                                </div>}
                            </div>
                        </div>
                    </div>
                </nav>
            </nav>
        </>
    )
}

export default Navbar;