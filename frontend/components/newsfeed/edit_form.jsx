import React from 'react';
import { connect } from 'react-redux';
import { toggleEditPostModal} from '../../action/ui_actions';



class EditPost extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      body: this.props.post.body
    }
  }




  render() {
    return(

    )
  }



}



export default connect(mapStateToProps,
mapDispatchToProps)(EditPost);
