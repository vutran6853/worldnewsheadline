import React, { Component } from 'react';
import axios from 'axios';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Container } from 'reactstrap';

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
      console.log(response.data)
      this.setState({ USNewsData: response.data.articles })
    })
    .catch((error) => {
      console.log(`Danger FrontEnd ${ error }`)
    });
  }

  render() {
    let { USNewsData } = this.state;

    let displayUSNews = USNewsData.map((value, index) => {
      console.log(value, index)
      return(
        <Container>
          <Card>
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
        <p>US</p>
        { displayUSNews }
      </div>
    );
  }
}

export default US;