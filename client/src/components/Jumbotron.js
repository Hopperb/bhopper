import React from 'react';
import {Link} from 'react-router-dom';
import { Jumbotron, Button } from 'reactstrap';
import PropTypes from 'prop-types';

const Jtron = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-4">Brandon Hopper | Software Engineer</h1>
        <img className="photo" src={require('../images/headshot1.jpg')} />
        <p className="lead">I code and create with MERN stack technologies, Python, and C.</p>
        <hr className="my-2" />
        <p>I'm always ready and looking to collab! So if you have a project in mind, lets work towards a solution together!</p>
        <p className="lead">
          <Link to='/about'><Button color="primary">Let's Connect!</Button></Link>
        </p>
      </Jumbotron>
    </div>
  );
};

Jumbotron.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  fluid: PropTypes.bool,
  className: PropTypes.string
};

export default Jtron;