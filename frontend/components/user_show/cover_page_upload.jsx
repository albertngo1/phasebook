import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { updateUser, requestSingleUser } from '../../actions/user_actions';
import FA from 'react-fontawesome';



class CoverPageUpload extends React.Component {

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
      formData.append("user[cover_page]", this.state.imageFile);
      this.props.updateUser(formData, userId)
         .then(this.props.requestSingleUser(userId));
   }

   render() {
      return(

         <div className="cover-page-upload-wrapper">
             <label htmlFor="cover-page-upload" className="cover-page-up">
                 Add Cover Photo
             </label>

             <input id="cover-page-upload"
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
   mapDispatchToProps)(CoverPageUpload))
