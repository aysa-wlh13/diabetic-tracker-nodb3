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
      handleInput = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
      };


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

      //Delete
      deleteTracker = index => {
          axios.delete(`api/tracker/${index}`)
          .then(res => this.setState({
            tracker: res.data
        })
        .catch(error => {console.log(error)})
      )
      }

      //Put
      updateState = updateTracker => {
          this.setState({
              tracker: updateTracker
          })
      }


    render(){
        return(
            <div className='back'>

                <section className= 'entry-styling'>
                    {this.state.tracker.map((element, index) => {
                        return(
                            <Entry/>
                        )
                    })}
                </section>

                <article>
                    <Add
                    addToTracker = {this.addToTracker}/>
                </article>

            </div>
        )
    }

}

export default Body;