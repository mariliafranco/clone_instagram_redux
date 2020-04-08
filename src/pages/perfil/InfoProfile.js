import React, { Component } from "react";
import { connect } from "react-redux";
import Helmet from "react-helmet";
import { FaFileCode } from "react-icons/fa";
import { DiGithubFull } from "react-icons/di";
import { IoIosArrowForward } from "react-icons/io"

class InfoProfile extends Component {

  render() {
    const { profile } = this.props;
    return (
      <div>
        <Helmet>
          <title>Profile</title>
        </Helmet>
        <div className="profile-picture">
          <img alt={profile.name} src={profile.userPicture} />
        </div>
        <div className="profile-infos">
          <h1>{profile.name}</h1><br />
          <p> <i> Entrou em {profile.joinAt}</i></p>
          <p>{profile.bio}</p>
          <p>{profile.age}</p><br />
          <div className="icons-git"><DiGithubFull /></div>
          <a className="profile-element profile-website" href="https://github.com/mariliafranco/">
            {profile.site} </a> <br />
          <div className="profile-stacks">
            <strong> <h2><FaFileCode /> Stacks: </h2></strong><br />
            {profile.stacks !== undefined && (
              <ul>
                {profile.stacks.map((item, indice) => (
                  <ul key={indice}><IoIosArrowForward />{item}</ul>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    profile: state.payloadProfile
  }
}

export default connect(mapStateToProps)(InfoProfile)