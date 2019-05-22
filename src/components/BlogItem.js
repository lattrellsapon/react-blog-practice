import React, { Component } from 'react';

export class BlogItem extends Component {
  render() {
    const { id, title, blogContent } = this.props.blog;

    return (
      <div className='container'>
        <div className='flex-container'>
          <div className='blog-header'>
            <h1>{title}</h1>
          </div>
          <div className='blog-content'>
            <p>{blogContent}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default BlogItem;
