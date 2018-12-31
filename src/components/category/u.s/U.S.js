import React, { Component } from 'react';
import axios from 'axios';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Container } from 'reactstrap';

import css from './usa.scss';

class US extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      USNewsData: []
     }
  }

  componentDidMount() {
    axios.get('/api/getUSNews')
    .then((response) => {
      // console.log(response.data)
      this.setState({ USNewsData: response.data.articles })
    })
    .catch((error) => {
      console.log(`Danger FrontEnd ${ error }`)
    });
  }
  
  ////  Route to singleTopicInfo to view
  handleTopicInfo = (value, image) => {
    console.log(value)
    this.props.history.push('/:us/singleTopicInfo2', { topic: value })
  }

  render() {
    let { USNewsData } = this.state;

    let displayUSNews = USNewsData.map((value, index) => {
      // console.log(value, index)
      return(
        <Container>
          <div id='usaCardBox' onClick={ () => this.handleTopicInfo(value) }>
            <img top width="100%" src={ value.urlToImage } alt={ value.title }/>
            <div className='innderLayerCardBox'>
              <h5>title: { value.title }</h5>
              <p>author: { value.author }</p>
            </div>
          </div>
        </Container>
      )
    });

    return (
      <div>
        <p>US</p>
        { displayUSNews }
      </div>
    );
  }
}

export default US;