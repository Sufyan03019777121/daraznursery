import React from 'react'
import '../../styles/components/navbar.css'
import nav_logo from "../../assets/logo/Logo.png"


const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-transpatent navbar-dark fixed-top">
        <div class="container">
          {/* logo */}
          <a class="navbar-brand" href="#"><img src={nav_logo} alt="logo" /></a>
          {/* toggle btn */}
          <button class="navbar-toggler border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span class="navbar-toggler-icon"></span>
          </button>
          {/* sidebar */}
          <div class="sidebar offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            {/* sidebar Header */}
            <div class="offcanvas-header text-white border-bottom">
              <img className='mt-1' src={nav_logo} alt="logo" />
              <button type="button" class="btn-close btn-close-white shadow-none" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            {/* sidebar body  */}
            <div class="sidebar d-flex flex-column offcanvas-body offcanvas-start">
              <ul class="navbar-nav  p-3 justify-content-end align-items-center small_font flex-grow-1 pe-3">
                <li class="nav-item">
                  <a class="nav-link active text-primary" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link white_color mx-3" href="#about">About</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link white_color" href="#popular">Popular</a>
                </li><li class="nav-item">
                  <a class="nav-link white_color mx-3" href="#featured">Featured</a>
                </li>
                {/* <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li>
                <hr class="dropdown-divider"/>
              </li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li> */}
              </ul>
              {/* <form class="d-flex mt-3" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form> */}
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
