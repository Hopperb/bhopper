import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import PropTypes from 'prop-types';

export default class Example extends React.Component {
  render() {
    return (
      <div>
        <Nav>
          <NavItem>
            <NavLink href="#">About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Work Experience</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://www.github.com/Hopperb">GitHub</NavLink>
          </NavItem>
          <NavItem>
            <NavLink disabled href="#">Brandon Hopper FullStack Web Developer</NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}

Nav.propTypes = {
    tabs: PropTypes.bool,
    pills: PropTypes.bool,
    card: PropTypes.bool,
    justified: PropTypes.bool,
    fill: PropTypes.bool,
    vertical: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    horizontal: PropTypes.string,
    navbar: PropTypes.bool,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
    // pass in custom element to use
  }

  NavItem.propTypes = {
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    active: PropTypes.bool,
    // pass in custom element to use
  }

  NavLink.propTypes = {
    disabled: PropTypes.bool,
    active: PropTypes.bool,
    // pass in custom element to use
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    // ref will only get you a reference to the NavLink component, use innerRef to get a reference to the DOM element (for things like focus management).
    innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
  }