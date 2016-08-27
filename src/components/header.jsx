import React    from 'react';
import ReactDOM from 'react-dom';

require('!style!css!sass!./header.scss');

export default class Header extends React.Component {

  render () {
    return (
      <div id="header">
        <ul className="header-list">
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </div>
    );
  }
}