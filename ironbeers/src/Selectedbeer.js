import React, { Component } from 'react';
import axios from 'axios';
import Mynavbar from './Mynavbar';
import Onebeer from './Onebeer';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

  class Compcountry extends Component{

    constructor(props){
        super(props);
        const { params } = props.match;
        console.log('*************'+params.id);

      this.state={
        params  :  params  ,
        onebeer:[]
        }

    }

    componentDidMount() {
        console.log('HHHHHHHHHHH');
        console.log('*********------------------****'+this.state.params.id);

        axios.get(`https://ih-beer-api.herokuapp.com/beers/${this.state.params.id}`)
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

export default Compcountry;
