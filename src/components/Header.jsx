import React from 'react'

const Header = ({header: {image, home: {linkHome, textHome}, about: {linkAbout, textAbout}, services: {linkServ, textServ}, gallery: {linkGal, textGal}, contact: {linkCont, textCont}}}) => {
    return(
      
  <header className="grid">
 
  <nav className="s-12 grid background-none background-primary-hightlight">
   
    <a href="index.html" className="m-12 l-3 padding-2x logo">
      <img src={image} />
    </a>
    <div className="top-nav s-12 l-9">
      <ul className="top-ul right chevron">
        <li>
          <a href={linkHome}>{textHome}</a>
        </li>
        <li>
          <a href={linkAbout}>{textAbout}</a>
        </li>
        <li>
          <a href={linkServ}>{textServ}</a>
        </li>
        <li>
          <a href={linkGal}>{textGal}</a>
        </li>
        <li>
          <a href={linkCont}>{textCont}</a>
        </li>
      </ul>
    </div>
  </nav>
</header>
    )
}

export default Header;