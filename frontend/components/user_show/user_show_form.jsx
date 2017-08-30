import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import FA from 'react-fontawesome';
import { createPost } from '../../actions/post_actions';

class PostShowForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      body: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.handleEnterSubmit = this.handleEnterSubmit.bind(this);
  }

  handleEnterSubmit(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      const post = Object.assign({}, this.state, {receiver_id: this.props.user.id,
      author_id: this.props.currentUser.id});
      this.props.createPost(post).then(
        () => this.setState( {body: ""})
      )
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const post = Object.assign({}, this.state, {receiver_id: this.props.user.id,
          author_id: this.props.currentUser.id});
    this.props.createPost(post).then(
      () => this.setState( {body: ""})
    );
  }

  update(property) {
    return e => this.setState({[property]: e.currentTarget.value});
  }

  render() {
    const { currentUser } = this.props
    const active_friends = currentUser.active_friends || [];
    let form;
      active_friends.forEach( el => {
        if (el.id == this.props.match.params.userId) {
          form = (
              <form onSubmit={this.handleSubmit} onKeyPress={this.handleEnterSubmit} className="pp-post-form">
                <div className="mp-nf-create-post-wrap">
                  <FA className="mp-nf-pencil" name='pencil' />
                  <span className="mp-nf-create-post">Status</span>
                </div>
                <div className="mp-nf-post-text-wrap">
                  <Link to={`/users/${currentUser.id}`}/>

                  <textarea
                    value={this.state.body}
                    onChange={this.update('body')}
                    className='pp-post-text'
                    placeholder={`What's on your mind?`}></textarea>

                  <button className='pp-post-form-btn'>Post</button>
                </div>
              </form>
          )

        }
      })
      if (form) {
        return form;
      } else {
        return(<div></div>)
      }

  }

}

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser || {},
  }
};

const mapDispatchToProps = dispatch => ({
  createPost: (post) => dispatch(createPost(post)),
});



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostShowForm));
