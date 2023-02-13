import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
       <div class="container-fluid">
    <Link to="/" class="navbar-brand" >PUBLICATION MANAGEMENT SYSTEM</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link to="/login" class="nav-link active" aria-current="page">LOGIN</Link>
        </li>
        <li class="nav-item">
        <Link to="/register" class="nav-link active" aria-current="page">REGISTER</Link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="null">FACULTY SYSTEM</a>
        </li>
        <li class="nav-item dropdown dropstart">
          <a class="nav-link dropdown-toggle" href="null" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            OTHERS
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="null">Publication</a></li>
            <li><a class="dropdown-item" href="null">Projects</a></li>
            <li><a class="dropdown-item" href="null">Products</a></li>
            <li><a class="dropdown-item" href="null">Awards</a></li>
            <li><a class="dropdown-item" href="null">Research Scholar Guidance</a></li>
            <li><a class="dropdown-item" href="null">Learning Material Developed</a></li>
            <li><a class="dropdown-item" href="null">FDP</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
  </nav>
      </div>
    
  )
}
