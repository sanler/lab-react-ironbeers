import React from 'react';
import home_logo from '../public/images/home_logo.PNG';
import { Link } from  'react-router-dom';


const Onebeer=(props)=>{

        return(
            <div  className="card">
               
            <div className="card-body beer-card">
            <div className="img-single-beer">
                <img className="image-single-beer" src={props.image} alt="Card image cap"/>
            </div>
            <div>
                <h1>{props.name}</h1>
                <h3>{props.tagline}</h3>
                <h3>{props.description}</h3>
                <h6><b>Contributed by:</b>{props.contributes}</h6>
            </div>
            </div>
        </div>
        );

}

export default Onebeer;