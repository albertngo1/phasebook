import React from 'react';
import {connect} from 'react-redux';
import UserEditInfo from './user_edit_info_form';
import UserInfo from './user_edit_info';
import { toggleEditIntroModal } from '../../actions/ui_actions';
import FA from 'react-fontawesome';
import { withRouter } from 'react-router-dom';


class UserIntro extends React.Component {

  constructor(props) {
    super(props);

    this.viewOptions = this.viewOptions.bind(this);
  }

  viewOptions() {
     return this.props.match.params.userId == this.props.currentUser.id;
  }


  render() {
    return (
      <div className="pp-left-container">
        <div className="pp-left-intro-ctn-wrap">
          <div className="pp-left-intro-ctn">
            <div className="pp-left-globe-wrapper">
              <FA size='lg' name="globe" className="pp-left-globe"/>
              </div>
              <div className="pp-left-intro">Intro</div>
                <div className="pp-left-intro-edit-wrap">
                  {this.viewOptions() && <FA name="pencil-square"
                    className="pp-left-intro-edit"
                    onClick={this.props.toggleEditIntroModal} />
                  }
                </div>
              </div>

              <UserInfo />
              <UserEditInfo />
                </div>
              </div>
    )
  }


}

const mapStateToProps = state => ({
  currentUser: state.session.currentUser || {},
})

const mapDispatchToProps = dispatch => ({
   toggleEditIntroModal: () => dispatch(toggleEditIntroModal),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserIntro));
