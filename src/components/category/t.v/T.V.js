import React, { Component } from 'react';
import axios from 'axios';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Container } from 'reactstrap';

import css from './tv.scss';

class TV extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      TVNewsData: []
     }
  }

  componentDidMount() {
    axios.get('/api/getTVNews')
    .then((response) => {
      console.log(response.data)
      this.setState({ TVNewsData: response.data.articles })
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
    let { TVNewsData } = this.state;

    let displayTVNews = TVNewsData.map((value, index) => {
      console.log(value, index)
      return(
         <Container>
          <Card onClick={ () => this.handleTopicInfo(value) }>
            <CardImg top width="100%" src={ value.urlToImage } alt={ value.title }/>
            <CardBody>
              <CardTitle>title: { value.title }</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>author: { value.author }</CardText>
              <CardText>content: { value.content }</CardText>
              <CardText>publishedAt: { value.publishedAt }</CardText>
              <a href={ value.url }>link: { value.title }</a>
            </CardBody>
          </Card>
        </Container>
      )
    });

    return (
      <div>
        <p>TV</p>
        { displayTVNews }
      </div>
    );
  }
}

export default TV;