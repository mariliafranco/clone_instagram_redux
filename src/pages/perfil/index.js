import React, { Component } from "react";
import InfoProfile from "./InfoProfile";
import axios from 'axios';
import Helmet from "react-helmet";
import { connect } from "react-redux";

class Profile extends Component {

  componentDidMount = async () => {
    await axios.get("http://localhost:3000/perfil")
      .then(resposta => {
        this.props.dispatch({
          type: 'GET_PROFILE',
          payload: resposta.data
        })
      })
  }

  render() {
    return (
      <>
        <Helmet>
          <title>Profile</title>
        </Helmet>
        <div className="profile">
          <InfoProfile />

        </div>
      </>
    );
  }
}

export default connect()(Profile)