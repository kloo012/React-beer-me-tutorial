import React from 'react';
import { Link } from 'react-router';

const Header = React.createClass({
  propTypes: {
    siteName: React.PropTypes.string.isRequired
  },
  render() {
    return (
      <h1>
        <Link to="/">{ this.props.siteName }</Link>
      </h1>
    );
  }
});

export default Header; /*default allows you to import it with any name you want*/
