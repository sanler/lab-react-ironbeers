import React, { Component } from 'react';
import home_logo from '../public/images/home_logo.PNG';
import axios from 'axios';
import Mynavbar from './Mynavbar';
import Onebeer from './Onebeer';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';



class Randombeer extends Component{

    constructor(props){
        super(props);
    
      this.state={
        onebeer:[]
        }
    }

    componentDidMount() {
        console.log('HHHHHHHHHHH');
        axios.get("https://ih-beer-api.herokuapp.com/beers/random")
        .then(response => {
            this.setState({onebeer: response.data})
            console.log(response.data);
        })
    }

    render(){
        return(
            <div>
            <div>  
          {Mynavbar()}  
              </div>         
       <Onebeer image={this.state.onebeer.image_url} name={this.state.onebeer.name} tagline={this.state.onebeer.tagline} description={this.state.onebeer.description} contributes={this.state.onebeer.contributed_by}/>
        </div>        
        );


    }

}

export default Randombeer;
   
   
   
   
   /* constructor(props){
        super(props);
    
      this.state={
        beer_name:"",
        beer_img:"",
        beer_tagline:"",
        beer_contributed_by: "",
        beer_id:""
        }
    }
                    <Link className="list-group-item list-group-item-action" key={index} to={`/countries/${oneCountry.cca3}`}>{oneCountry.cca2} {oneCountry.name.common}</Link>

  <div>
    
            <div  className="card">
               
                <div className="card-body beer-card">
                <div className="img-beer">
                    <img className="image-beer" src={this.state.onebeer.image_url} alt="Card image cap"/>
                </div>
                <div>
                    <h1>{this.state.onebeer.name}</h1>
                    <h3>{this.state.onebeer.tagline}</h3>
                    <h6><b>Contributed by:</b>{this.state.onebeer.contributed_by}</h6>
                </div>
                </div>
            </div>
            </div>         */