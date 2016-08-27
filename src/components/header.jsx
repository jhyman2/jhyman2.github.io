import React    from 'react';
import ReactDOM from 'react-dom';

require('!style!css!sass!./header.scss');

export default class Header extends React.Component {

  render () {
    return (
      <div id="header">
        <ul className="header-list">
          <li>Home</li>
          <li>Contact</li>
          <li>Projects</li>
          <li>Resume</li>
          <li>About</li>
        </ul>
      </div>
    );
  }
}