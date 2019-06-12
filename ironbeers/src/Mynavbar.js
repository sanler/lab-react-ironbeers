import React from 'react';
import home_logo from '../public/images/home_logo.PNG';
import { Link } from  'react-router-dom';


const Mynavbar=()=>{

        return(
            <nav className=" bar">
            <div className="container_bar">
            <Link to={`/`}> <img src={home_logo} alt="Navbar"/></Link>
            </div>
          </nav>     
        );

}

export default Mynavbar;