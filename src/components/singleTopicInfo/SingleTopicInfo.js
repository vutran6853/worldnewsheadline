import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Container } from 'reactstrap';

class SingleTopicInfo extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      topicData: [],
      topicImage: [],
     }
  }
  componentDidMount() {
    // console.log(this.props.location.state)
    this.setState({ topicData: [this.props.location.state.topic] })
    this.setState({ topicImage: this.props.location.state.topicImage })
  }
  render() {
    let { topicData, topicImage } = this.state;
    console.log(topicData)
    if(topicData == [].length) {
      console.log('waiting for data. need pop message')
    } else if(true) {
    var displayTopicInfo = topicData.map((value, index) => {
      console.log(value, index)
      console.log(topicImage)
      return(
          <Container>
            <Card>
              <CardBody id='dashboardCardBox'>
              <CardText>section: { value.section }</CardText>

                <CardTitle>title: { value.title }</CardTitle>
                <img src={ topicImage.url } alt={ topicImage.caption }></img>
                <CardText>Image copyright: { topicImage.copyright }</CardText>
                <CardText>author: { value.author }</CardText>
                <CardText>updated_date: { value.updated_date }</CardText>
                <CardText>abstract: { value.abstract }</CardText>
                <CardText>published_date: { value.published_date }</CardText>
                <a href={ value.url }>link: { value.title }</a>
                <CardText>subsection: { value.subsection }</CardText>
              </CardBody>
            </Card>
          </Container>
        )
      });
    }

    return (
      <div>
        <p>singleTopicInfo Component</p>
          { displayTopicInfo }
      </div>
    );
  }
}

export default SingleTopicInfo;