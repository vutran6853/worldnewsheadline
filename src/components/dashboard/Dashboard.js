import React, { Component } from 'react';
import axios from 'axios';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Container } from 'reactstrap';

import css from './dashboard.scss';

const lodash = require('lodash');

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      topstoriesData: [],
      multimedia: [],
     }
  }

  componentDidMount() {
    axios.get('/api/topstories')
    .then((response) => {
      // console.log(response.data)
      this.setState({ topstoriesData: response.data.results })
      return response
    })
    .then((response) => {
     this.setState({ multimedia: response.data.results.map((value) => {
       return value.multimedia
        }) 
      })
    })
    .catch((error) => {
      console.log(`Danger FrontEnd ${ error }`)
    });
  }

  ////  Route to singleTopicInfo to view
  handleTopicInfo = (value, image) => {
    this.props.history.push('/singleTopicInfo', { topic: value , topicImage: image })
  }
  
  render() {
    let { topstoriesData, multimedia } = this.state;

    let singleMultiMedia = [];

    let spliteMutimedia = multimedia.map((value, index) => {
      // console.log(value[0], index)
      singleMultiMedia.push(value[0])
    });

    let displaytopstories = topstoriesData.map((value, index) => {
      // console.log(value, index)
      // console.log(singleMultiMedia[index])
      if(singleMultiMedia[index] === undefined) {
          // console.log('found undefined')
      } else {
        return(
          <Container>
            <div id='dashboardCardBox'>
              <div  onClick={ () => this.handleTopicInfo(value, singleMultiMedia[index]) }>
                <img src={ singleMultiMedia[index].url }></img>
                <div className='innderLayerCardBox'>
                  <p>section: { value.section }</p>
                  <h5>title: { value.title }</h5>
                </div>
              </div>
            </div>
          </Container>
        )
      }
    });
    
    return (
      <div>
        <p>Dashboard</p>
          { displaytopstories }
      </div>
    );
  }
}

export default Dashboard;