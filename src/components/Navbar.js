import React from 'react'
import './Navbar.css';
import logo from '../Assets/logo512.png';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    let location = useLocation();
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
                        <div className="collapse navbar-collapse  container flex-center" id="navbarNavAltMarkup">
                            <div className="navbar-nav nav-items container flex-center">
                                <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} aria-current="page" to="/">Home</Link>
                                <Link className={`nav-link ${location.pathname === '/fetures' ? 'active' : ''}`} to="/fetures">Features</Link>
                                <Link className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} to="/about">About</Link>
                                <Link className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`} to="/contact">Contact</Link>
                            </div>
                            <form className="d-flex" role="search">
                                <input className="form-control form-inp me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </nav>
        </>
    )
}

export default Navbar