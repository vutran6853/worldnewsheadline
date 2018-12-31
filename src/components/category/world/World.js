import React, { Component } from 'react';
import axios from 'axios';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Container } from 'reactstrap';

import css from './world.scss';

class World extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      worldNewsData: []
     }
  }

  componentDidMount() {
    axios.get('/api/getWorldNews')
    .then((response) => {
      console.log(response.data)
      this.setState({ worldNewsData: response.data.articles })
    })
    .catch((error) => {
      console.log(`Danger FrontEnd ${ error }`)
    });
  }
  ////  Route to singleTopicInfo to view
  handleTopicInfo = (value, image) => {
    console.log(value)
    this.props.history.push('/:world/singleTopicInfo2', { topic: value })
  }

  render() {
    let { worldNewsData } = this.state;

    let displayWorldNews = worldNewsData.map((value, index) => {
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
        <p>World</p>
        { displayWorldNews }
      </div>
    );
  }
}

export default World;