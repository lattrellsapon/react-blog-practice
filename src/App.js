import React, { Component } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Blogs from './components/Blogs';
import uuid from 'uuid';
import './App.css';

export class App extends Component {
  state = {
    blogs: [
      {
        id: uuid.v4(),
        title: 'Blog One',
        blogContent:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro illum fuga similique perspiciatis dolorum veritatis aut quo illo. Aperiam quas placeat quo delectus voluptate eaque atque beatae illum excepturi rerum quasi incidunt reiciendis ipsa aliquam corrupti adipisci blanditiis tempora animi minima ratione tenetur veritatis in, soluta a. Repellendus, incidunt quos.'
      },
      {
        id: uuid.v4(),
        title: 'Blog Two',
        blogContent:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro illum fuga similique perspiciatis dolorum veritatis aut quo illo. Aperiam quas placeat quo delectus voluptate eaque atque beatae illum excepturi rerum quasi incidunt reiciendis ipsa aliquam corrupti adipisci blanditiis tempora animi minima ratione tenetur veritatis in, soluta a. Repellendus, incidunt quos.'
      },
      {
        id: uuid.v4(),
        title: 'Blog Three',
        blogContent:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro illum fuga similique perspiciatis dolorum veritatis aut quo illo. Aperiam quas placeat quo delectus voluptate eaque atque beatae illum excepturi rerum quasi incidunt reiciendis ipsa aliquam corrupti adipisci blanditiis tempora animi minima ratione tenetur veritatis in, soluta a. Repellendus, incidunt quos.'
      }
    ],
    errorMessage: ''
  };

  addNewBlog = (title, blogContent) => {
    console.log('We are now ready to create a new blog');
    console.log(title);
    console.log(blogContent);

    if (title === '') {
      this.setState({
        errorMessage: 'Please make sure that you have a title!'
      });
    } else if (blogContent === '') {
      this.setState({
        errorMessage: 'Please make sure that your blog has content!'
      });
    } else {
      const newBlog = {
        id: uuid.v4(),
        title: title,
        blogContent: blogContent
      };

      this.setState({
        blogs: [...this.state.blogs, newBlog],
        errorMessage: 'Blog added succesfully.'
      });
    }
  };

  render() {
    return (
      <div>
        <Header />
        <Form
          addNewBlog={this.addNewBlog}
          errorMessage={this.state.errorMessage}
        />
        <Blogs blogs={this.state.blogs} />
      </div>
    );
  }
}

export default App;
