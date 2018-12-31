import React, { Component } from 'react';
import axios from 'axios';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Container } from 'reactstrap';

import css from './politics.scss';

class Politics extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      politicsNewsData: []
     }
  }

  componentDidMount() {
    axios.get('/api/getPoliticsNews')
    .then((response) => {
      console.log(response.data)
      this.setState({ politicsNewsData: response.data.articles })
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
    let { politicsNewsData } = this.state;

    let displayPoliticsNews = politicsNewsData.map((value, index) => {
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
        <p>Politics</p>
        { displayPoliticsNews }
      </div>
    );
  }
}

export default Politics;