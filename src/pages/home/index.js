import React, { Component } from "react";
import Sidebar from "../../components/Sidebar";
import TimeLine from "../../components/TimeLine";
import axios from 'axios';
import Helmet from "react-helmet";
import { connect } from "react-redux";

class Home extends Component {

  componentDidMount = async () => {
    await axios.get("http://localhost:3000/user")
      .then(resposta => {
        this.props.dispatch({
          type: 'GET_USER',
          payload: resposta.data
        })
      })
  }

  render() {
    return (
      <>
        <Helmet>
          <title>Timeline</title>
        </Helmet>
        <div className="home">
          <TimeLine />
          <Sidebar />
        </div>
      </>
    );
  }
}

export default connect()(Home)
