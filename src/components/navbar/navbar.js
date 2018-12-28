import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container } from 'reactstrap';

// import './navBar.scss';

let navbar = (props) => {

  return(
    <Container fluid>
      <Link to='/'>
        <Button size='sm' color='info' >
          Dashboard
        </Button>
      </Link>
      <Link to='/us'>
        <Button size='sm' color='info' >
          U.S
        </Button>
      </Link>
      <Link to='/world'>
        <Button size='sm' color='info'>
          World
        </Button>
      </Link>
      <Link to='/opinion'>
        <Button size='sm' color='info'>
          Opinion
        </Button>
      </Link>
      <Link to='/tv'>
        <Button size='sm' color='info'>
          TV
        </Button>
      </Link>
      <Link to='/lifestyle'>
        <Button size='sm' color='info'>
          Lifestyle
        </Button>
      </Link>
      <Link to='/politics'>
        <Button size='sm' color='info'>
          Politics
        </Button>
      </Link>
      <Link to='/topHeadline'>
        <Button size='sm' color='info'>
          TopHeadline
        </Button>
      </Link>
    </Container>
  )
}

export default navbar;