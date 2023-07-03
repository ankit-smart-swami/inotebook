import React from 'react'
import './Navbar.css';
import logo from '../Assets/logo512.png';

const Navbar = () => {
    return (
        <>
            <nav className="bg-dark border-bottom border-bottom-dark" data-bs-theme="dark">
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid container">
                        <img src={logo} alt='nav-logo' className='nav-logo'/>
                        <a className="navbar-brand" href="/">iNoteBook</a>
                        <div className="collapse navbar-collapse  container" id="navbarNavAltMarkup">
                            <div className="navbar-nav nav-items container">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                                <a className="nav-link" href="/">Features</a>
                                <a className="nav-link" href="/">About</a>
                                <a className="nav-link" href="/">Contact</a>
                            </div>
                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
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