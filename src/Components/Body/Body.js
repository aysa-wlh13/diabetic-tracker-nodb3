import React, { Component } from "react";
import './Body.css';
import Add from '../Add/Add';
import Entry from '../Entry/Entry';

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


      //handel input



      //Post
      addToTracker = (bloodSugar, food, grams, units, time, timeDay, date) => {
          console.log('hit')
          axios.post('/api/tracker', {bloodSugar, food, grams, units, time, timeDay, date})

          .then(res => this.setState({
              tracker: res.data
          })
          .catch(error => {console.log(error)})
        )
      }

      //Put


      //Delete

      

    render(){
        return(
            <div className='back'>
                <Entry/>

                <section>
                    <Add addToTracker = {this.addToTracker}/>
                </section>
            </div>
        )
    }

}

export default Body;