import React, { Component } from 'react';
import home_logo from '../public/images/home_logo.PNG';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';



class Allbeers extends Component{

    constructor(props){
        super(props);
    
      this.state={
        mybeers:[]
        }
    }

    componentDidMount() {
        console.log('HHHHHHHHHHH');
        axios.get("https://ih-beer-api.herokuapp.com/beers")
        .then(response => {
            this.setState({mybeers: response.data})
            console.log(response.data);
        })
    }

    render(){
        return(
                        
        <div>
        {this.state.mybeers.map((onebeer, index) =>{
            return(
            <div key={index} className="card">
               
                <div className="card-body beer-card">
                <div className="img-beer">
                    <img className="image-beer" src={onebeer.image_url} alt="Card image cap"/>
                </div>
                <div>
                    <h1>{onebeer.name}</h1>
                </div>
                </div>
            </div>
         );
       })}
       </div>        
        );


    }

}

export default Allbeers;
   
   
   
   
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

  */