import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Container } from 'reactstrap';

class SingleTopicInfo2 extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      topicData: [],
     }
  }
  componentDidMount() {
    console.log(this.props)
    this.setState({ topicData: [this.props.location.state.topic] })
  }
  render() {
    let { topicData } = this.state;
    console.log(topicData)
    if(topicData == [].length) {
      console.log('waiting for data. need pop message')
    } else if(true) {
    var displayTopicInfo = topicData.map((value, index) => {
      console.log(value, index)
      return(
        <Container>
        <Card>
          <CardImg top width="100%" src={ value.urlToImage } alt={ value.title }/>
          <CardBody >
            <CardTitle>title: { value.title }</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>author: { value.author }</CardText>
            <CardText>content: { value.content }</CardText>
            <CardText>publishedAt: { value.publishedAt }</CardText>
            <CardText>description: { value.description }</CardText>
            <a href={ value.url }>link: { value.title }</a>
          </CardBody>
        </Card>
      </Container>
        )
      });
    }

    return (
      <div>
        <p>singleTopicInfo2 Component</p>
          { displayTopicInfo }
      </div>
    );
  }
}

export default SingleTopicInfo2;