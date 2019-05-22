import React, { Component } from 'react';

export class Form extends Component {
  state = {
    title: '',
    blogContent: ''
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.addNewBlog(this.state.title, this.state.blogContent);
    this.setState({
      title: '',
      blogContent: ''
    });
  };

  getStyle = () => {
    if (this.props.errorMessage === 'Blog added succesfully.') {
      return {
        background: 'green',
        visibility: 'visible',
        margin: '20px auto',
        width: '50%',
        padding: '20px',
        color: '#fff'
      };
    } else if (
      this.props.errorMessage === 'Please make sure that you have a title!' ||
      this.props.errorMessage === 'Please make sure that your blog has content!'
    ) {
      return {
        background: 'red',
        visibility: 'visible',
        margin: '20px auto',
        width: '50%',
        padding: '20px',
        color: '#fff'
      };
    }
  };

  render() {
    return (
      <div className='form-container'>
        <h1>Add a new blog !</h1>
        <p style={this.getStyle()} id='user-message'>
          {this.props.errorMessage}
        </p>
        <form onSubmit={this.onSubmit}>
          <label htmlFor=''>Title: </label>
          <input
            type='text'
            name='title'
            value={this.state.title}
            onChange={this.onChange}
          />
          <textarea
            name='blogContent'
            id=''
            cols='100'
            rows='10'
            value={this.state.blogContent}
            onChange={this.onChange}
          />
          <input type='submit' value='Submit' className='submit-button' />
        </form>
      </div>
    );
  }
}

export default Form;
