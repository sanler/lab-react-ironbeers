import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import beers from '../public/images/beers.png';
import newbeer from '../public/images/new-beer.png';
import randombeer from '../public/images/random-beer.png';


class Home extends Component{

    render(){

        return(
            <div>
                <div className="bloque">
                <div className="card cardbeer">
                    <img className="card-img-top" src={beers} alt="Card  cap"/>
                    <div className="card-body">
                        <h5 className="card-title">All Beers</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
            <div className="bloque">
                <div className="card">
                    <img className="card-img-top" src={newbeer} alt="Card  cap"/>
                    <div className="card-body">
                        <h5 className="card-title">Random Beer</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
            <div className="bloque">
                <div className="card">
                    <img className="card-img-top" src={randombeer} alt="Card  cap"/>
                    <div className="card-body">
                        <h5 className="card-title">New Beer</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        </div>
        );
    }

}

export default Home;