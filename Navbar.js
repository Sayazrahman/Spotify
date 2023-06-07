import React from 'react';

const Navbar = () => {
  

  return (
    <header style={{position: 'sticky',height: '100%'}}>
    <nav class="navbar-expand-lg navbar-dark " style={{backgroundColor:'black',color: 'white', minWidth: '20%',position: 'sticky'}}>
    <div class="container-fluid ">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        
          <li class="nav-item">
            <a class="nav-link" href="#"></a>
          </li>
          
            
        </ul>
        <button className='login/signup  '>Login/Singup</button>
        <button className='upgrade mx-3'>Upgrade</button>
      </div>
    </div>
  </nav>
  </header>
  );
};
export default Navbar;