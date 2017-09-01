import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { updateUser, requestSingleUser } from '../../actions/user_actions';
import FA from 'react-fontawesome';



class ProfilePicUpload extends React.Component {

   constructor(props) {
      super(props);

      this.state = {
         imageFile: null,
         imageUrl: null
      }
      this.updateFile = this.updateFile.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
   }

   updateFile(e) {
     let file = e.currentTarget.files[0];
     let fileReader = new FileReader();
     fileReader.onloadend = () => {
      this.setState({ imageFile: file, imageUrl: fileReader.result },
      this.handleSubmit);
     }

     if (file) {
      fileReader.readAsDataURL(file);
     }
   }

   handleSubmit() {
      const userId = this.props.user.id
      let formData = new FormData();
      formData.append("user[profile_pic]", this.state.imageFile);
      this.props.updateUser(formData, userId)
         .then(this.props.requestSingleUser(userId));
   }

   render() {
      return(

         <div className="profile-picture-upload-wrapper">
             <label htmlFor="profile-pic-upload" className="profile-pic-up">
                 <FA name="camera" size="3x"/>
             </label>

             <input id="profile-pic-upload"
                type="file" onChange={this.updateFile} />
         </div>

      )
   }
}

const mapStateToProps = state => ({
   user: state.entities.user || {},
})

const mapDispatchToProps = dispatch => ({
   updateUser: (formData, id) => dispatch(updateUser(formData, id)),
   requestSingleUser: (userId) => dispatch(requestSingleUser(userId)),
})



export default withRouter(connect(mapStateToProps,
   mapDispatchToProps)(ProfilePicUpload))
