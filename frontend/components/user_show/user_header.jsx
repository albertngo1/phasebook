import React from 'react';
import FriendRequest from './friend_request';
import ProfilePicUpload from './profile_picture_upload';
import CoverPageUpload from './cover_page_upload';
import { Link } from 'react-router-dom';




class UserHeader extends React.Component {

  constructor(props) {
    super(props);

    this.profilePictureUpload = this.profilePictureUpload.bind(this);
    this.coverPageUpload = this.coverPageUpload.bind(this);

  }

  profilePictureUpload() {
      if (this.props.user.id == this.props.currentUser.id) {
         return(
            <div>
               <ProfilePicUpload />
            </div>
         )
      }
   }

   coverPageUpload() {
      if (this.props.user.id == this.props.currentUser.id) {
         return(
            <div className="cover-page-upload-container">
               <CoverPageUpload />
            </div>
         )
      }
   }


  render() {
    const {user, currentUser} = this.props
    return(
      <div className="pp-header">
               {this.coverPageUpload()}
               <img className="pp-cover-page" src={user.cover_page} />
               <div className="pp-header-reposition">
                  <div className="pp-header-cover-page-wrap">
                     <div className="pp-profile-pic-wrap">
                        {this.profilePictureUpload()}
                        <img className="pp-profile-pic" src={user.profile_pic_large} />
                     </div>

                     <div className="pp-header-name">
                        <Link to={`/users/${user.id}`}>
                           <span className="pp-header-name-txt">
                              {user.first_name} {user.last_name}

                           </span>
                        </Link>
                     </div>

                  </div>
                  <div className="pp-header-items-wrap">
                     <div className="pp-header-items">
                        <Link to={`/users/${user.id}`}>
                           <div className="pp-header-timeline">Timeline</div>
                        </Link>
                        <div className="pp-header-about">About</div>
                        <Link to={`/users/${user.id}/friends`}>
                        <div className="pp-header-friends">Friends</div>
                        </Link>
                     </div>
                     <FriendRequest />
                  </div>
               </div>
            </div>
    )
  }

}

export default UserHeader;
