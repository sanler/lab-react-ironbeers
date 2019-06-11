import React from 'react';
import home_logo from '../public/images/home_logo.PNG';


const Mynavbar=()=>{

        return(
            <nav className=" bar">
            <div className="container_bar">
             <img src={home_logo} alt="Navbar"/> 
            </div>
          </nav>     
        );

}

export default Mynavbar;