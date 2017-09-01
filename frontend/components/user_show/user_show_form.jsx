import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import FA from 'react-fontawesome';
import { createPost } from '../../actions/post_actions';

class PostShowForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      body: "",
      imageFile: null,
      imageUrl: null,
      receiver_id: this.props.match.params.userId
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.handleEnterSubmit = this.handleEnterSubmit.bind(this);
    this.updateFile = this.updateFile.bind(this);
  }

  updateFile(e) {
    let file = e.currentTarget.files[0];
    let fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ imageFile: file, imageUrl: fileReader.result });
    }

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  handleEnterSubmit(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      let formData = new FormData();
      formData.append("post[body]", this.state.body);
      formData.append("post[receiver_id]", this.state.receiver_id);
      if (this.state.imageFile) {
        formData.append("post[image]", this.state.imageFile);
      }
      this.props.createPost(formData).then(
        () => this.setState( {body: "", imageFile: null, imageUrl: null})
      )
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    let formData = new FormData();
    formData.append("post[body]", this.state.body);
    formData.append("post[receiver_id]", this.state.receiver_id);
    if (this.state.imageFile) {
      formData.append("post[image]", this.state.imageFile);
    }
    this.props.createPost(formData).then(
      () => this.setState( {body: "", imageFile: null, imageUrl: null})
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
                  <div className="mp-nf-pic-upload-wrapper">
                    <label htmlFor="mp-nf-pic-upload">
                      <FA name="file-photo-o" className="mp-nf-pic"/>
                      <div>Add Picture</div>
                    </label>

                    <input id="mp-nf-pic-upload"
                      type="file" onChange={this.updateFile} />
                  </div>
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
