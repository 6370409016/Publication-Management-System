import React from 'react'
import cutmLogo from '../Assests/Cutm logo.png'
import { Link } from 'react-router-dom'
import "../Home.css"

export default function Navbar() {
    return (
        <nav className="  navbar navbar-expand-lg ">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand" >
                    <img src={cutmLogo} alt='cutm-logo' className='cutm-logo' />
                    PUBLICATION MANAGEMENT SYSTEM</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/login" className="nav-link active" aria-current="page">LOGIN</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/register" className="nav-link active" aria-current="page">REGISTER</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/faculty">FACULTY SYSTEM</Link>
                        </li>
                        <li className="nav-item dropdown dropstart">
                            <Link className="nav-link dropdown-toggle" to="null" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                OTHERS
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/publication">Publication</Link></li>
                                <li><Link className="dropdown-item" to="/project">Projects</Link></li>
                                <li><Link className="dropdown-item" to="null">Products</Link></li>
                                <li><Link className="dropdown-item" to="/award">Awards</Link></li>
                                <li><Link className="dropdown-item" to="null">Research Scholar Guidance</Link></li>
                                <li><Link className="dropdown-item" to="null">Learning Material Developed</Link></li>
                                <li><Link className="dropdown-item" to="null">FDP</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
