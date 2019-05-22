import React, { Component } from 'react';
import BlogItem from './BlogItem';

export class Blogs extends Component {
  render() {
    return this.props.blogs.map(blog => <BlogItem key={blog.id} blog={blog} />);
  }
}

export default Blogs;
