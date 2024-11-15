import React from 'react'
const Header = () => {
    return(
      
  <header className="grid">
 
  <nav className="s-12 grid background-none background-primary-hightlight">
   
    <a href="index.html" className="m-12 l-3 padding-2x logo">
      <img src="img/logo.svg" />
    </a>
    <div className="top-nav s-12 l-9">
      <ul className="top-ul right chevron">
        <li>
          <a href="index.html">Home</a>
        </li>
        <li>
          <a href="about-us.html">About Us</a>
        </li>
        <li>
          <a href="services.html">Services</a>
        </li>
        <li>
          <a href="gallery.html">Gallery</a>
        </li>
        <li>
          <a href="contact.html">Contact</a>
        </li>
      </ul>
    </div>
  </nav>
</header>
    )
}

export default Header;