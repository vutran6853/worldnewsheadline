import React, { Component } from 'react';
import axios from 'axios';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Container } from 'reactstrap';

import css from './lifestyle.scss';

class LifeStyle extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      lifeStyleNewsData: []
     }
  }

  componentDidMount() {
    axios.get('/api/getLifeStyleNews')
    .then((response) => {
      console.log(response.data)
      this.setState({ lifeStyleNewsData: response.data.articles })
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
    let { lifeStyleNewsData } = this.state;

    let displayLifeStyleNews = lifeStyleNewsData.map((value, index) => {
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
        <p>LifeStyle</p>
        { displayLifeStyleNews }
      </div>
    );
  }
}

export default LifeStyle;