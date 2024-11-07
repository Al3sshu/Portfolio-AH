import './Navbar.css';
import React from 'react';


function Navbar(){
    return(
        <header className='header'>
          {/* <img className='ImageLogo' src="/public/AlejandraHumanes.png" alt="Logo Alejandra Humanes" />  */}
          <section className='logo'>
          <h1 className='h1'>Alejandra Humanes </h1>
          <h2 className='h2'>Frontend Developer</h2>
        </section>
      <nav className='navbar'>
            <a href="/">About me </a>
            <a href="/">Proyects</a>
            <button> Contact me </button>

       </nav>
     </header>
        
            )
};

export default Navbar;