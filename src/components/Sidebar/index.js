import React, { Component } from "react";
import { connect } from "react-redux";
import Storie from "./stories"

class Sidebar extends Component {
   
   render() {
      const { name, username } = this.props.user
      const { profilePicture } = this.props
      const stories = this.props.stories
      
      return (
         <div className="sidebar">
            <div className="user-info">
               <img alt="Perfil" src={profilePicture} />
               <div className="user-bio">
                  <strong>{name}</strong>
                  <span>{username}</span>
               </div>
            </div>
            <div className="stories">
               <h2>Stories</h2>
               {stories.map(storie => (
                  <Storie
                  key={storie.id}
                  user={storie.user}
                  userPicture={storie.userPicture}
                  time={storie.time}/>
                  ))}
            </div>
         </div>
      );
   }
}
      
function mapStateToProps(state) {
   return {
      user: state.payloadUser,
      profilePicture: state.payloadPerfil.userPicture,
      stories: state.payloadStories
   };
}

export default connect(mapStateToProps)(Sidebar)
