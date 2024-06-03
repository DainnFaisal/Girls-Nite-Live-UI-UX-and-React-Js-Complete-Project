import React from 'react'
import '../stylesheets/navbar.css';
import LOGO from '../assets/Image 2.jpg';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';


function Navbar() {
    return (
        <>

            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid ">
                <Link className='setlinks' to="/dainhome"><img src={LOGO} alt='Logo' /></Link>
                 

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
            
                            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">


                                <li className="nav-item me-3">
                                    <Link className='setlinks' to="/About">About</Link>
                                </li>

                                <li className="nav-item me-3">
                                    <Link className='setlinks' to="/dainEvents">Events</Link>
                                </li>

                                <li className="nav-item me-3">
                                    <Link className='setlinks' to="/dainMarketPlace">Market Place</Link>
                                </li>

                                <li className="nav-item me-3">
                                    <Link className='setlinks' to="/dainVideos">Videos</Link>
                                </li>

                                <li className="nav-item me-3">
                                    <Link className='setlinks' to="/dainWorkwithGNL">Work with GNL</Link>
                                </li>

                                <li className="nav-item me-3">
                                    <Link className='setlinks' to="/dainBlog">Blog</Link>
                                </li>
                            </ul>
                    

                        <form className="d-flex" role="search">
                            <button className="search-btn" type="submit"><SearchIcon/></button>
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />

                        </form>
                    </div>
                </div>
            </nav >
        </>
    )
}

export default Navbar
