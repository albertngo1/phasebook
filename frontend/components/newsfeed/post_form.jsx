import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class PostForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      body: "",
      author_id: this.props.authorId,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const post = Object.assign({}, this.state);
    this.props.createPost(post).then(
      () => this.setState( {body: ""})
    );

  }

  update(property) {
    return e => this.setState({[property]: e.currentTarget.value});
  }

  render() {
    const { currentUser, authorId } = this.props
    return(
      <form className="form" onSubmit={ this.handleSubmit }>
        <div>Create a Post</div>

        <div className="textbox">
          <Link to='/' className="profile-page" />

          <textarea onChange={ this.update('body') }
            value={ this.state.body }
            className='form-items'
            placeholder={`What's on your mind, ${currentUser.first_name}`}>
          </textarea>
        </div>
         <button className="create-form-submit">Post</button>
      </form>
    )
  }

}




export default withRouter(PostForm);
