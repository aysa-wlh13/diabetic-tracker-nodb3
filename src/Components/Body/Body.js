import React, { Component } from "react";
import './Body.css';

import axios from "axios";


class Body extends Component {
    constructor(){
        super();

        this.state = {
            tracker: [],
            bloodSugar: 0,
            food: '',
            grams: 0,
            units:'',
            time: '',
            timeDay: '',
            date: ''
        }
    }

    componentDidMount = () => {
        axios.get("/api/tracker").then(res =>
          this.setState({
            tracker: res.data
          })
        );
      };

      

    render(){
        return(
            <div className='back'>
                body
            </div>
        )
    }

}

export default Body;