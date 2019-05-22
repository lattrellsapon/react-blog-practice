import React, { Component } from 'react';

export class Header extends Component {
  render() {
    return (
      <div className='header'>
        <h1>Treezy Blog</h1>
        <p>
          Where you can write little blogs about your day and share it with the
          world.
        </p>
      </div>
    );
  }
}

export default Header;
