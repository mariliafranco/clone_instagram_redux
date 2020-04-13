import React, { Component } from "react";
import { connect } from "react-redux";
import axios from 'axios';
import { Link } from "react-router-dom";
import { GoVerified } from "react-icons/go";

class Sidebar extends Component {

   state = {
      stories: []
   }

   componentDidMount = async () => {
      await axios.get("http://localhost:3000/stories")
         .then(resposta => {
            this.setState({ stories: resposta.data })
         })
   }

   render() {
      const { name, username } = this.props.user
      const { userPicture } = this.props.profile
      const { stories } = this.state

      return (
         <nav>
            {stories !== undefined && (
               <div className="sidebar">
                  <div className="user-info">
                     <Link to="/profile">
                        <img alt="Perfil" src={userPicture} />
                     </Link>
                     <div className="user-bio">
                        <strong>{username}</strong>
                        <span>{name}</span>
                     </div>
                  </div>
                  <div className="stories">
                     <div className="navbar-stories">
                        <h2>Stories</h2>
                        <h5>Ver tudo</h5>
                     </div>
                     <ul>
                        {stories.map(storie => (
                           <ul key={storie.id}>
                              <div className="storie">
                                 <div className="storie-image">
                                    <img src={storie.userPicture} alt="user" />
                                 </div>
                                 <div className="storie-user">
                                    <strong>{storie.user}{storie.verify == true && <GoVerified />}</strong>
                                    <span>{storie.time}</span>
                                 </div>
                              </div>
                           </ul>
                        ))}
                     </ul>
                  </div>
               </div>
            )}
         </nav>
      );
   }
}

function mapStateToProps(state) {
   return {
      user: state.payloadUser,
      profile: state.payloadProfile,
   };
}

export default connect(mapStateToProps)(Sidebar)
