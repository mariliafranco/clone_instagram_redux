import React, { Component } from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import TimeLine from "../../components/TimeLine";
import axios from 'axios';
import { connect } from 'react-redux'

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

componentDidMount = async () => {
  await axios.put("http://localhost:3000/users")
  .then(resposta => {
    this.props.dispatch({
      type: 'NEW_LIKE',
      payload: resposta.data
    })
  })
}

// componentDidMount = async () => {
//   await axios.get("http://localhost:3000/posts")
//   .then(resposta => {
//     this.props.dispatch({
//       type: 'GET_POSTS',
//       payload: resposta.data
//     })
//   })
// }

// componentDidMount = async () => {
//   await axios.get("http://localhost:3000/stories")
//   .then(resposta => {
//     this.props.dispatch({
//       type: 'GET_STORIES',
//       payload: resposta.data
//     })
//   })
// }

// componentDidMount = async () => {
//   await axios.get("http://localhost:3000/perfil")
//   .then(resposta => {
//     this.props.dispatch({
//       type: 'GET_PERFIL',
//       payload: resposta.data
//     })
//   })
// }

render () {
  return (
    <>
      <Header />
      <div className="home">
        <TimeLine />
        <Sidebar />
      </div>
    </>
  );
}
}

export default connect()(Home)
