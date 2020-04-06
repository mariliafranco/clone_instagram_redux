import React, { Component } from "react";
import { FiUser, FiHeart } from "react-icons/fi";
import { connect } from "react-redux";
// import { Link } from "react-router-dom"

class TopInfo extends Component {
  render() {
    return (
      <div className="top-info">
        <span>
          <FiHeart />
          <b>{this.props.contador}</b>
        </span>
        <span>
          {/* <Link to="/profile"> */}
          <FiUser />
          {this.props.user}
          {/* </Link> */}
        </span>
      </div>
    );
  }
}         

function mapStateToProps(state){
  return {
    contador: state.payloadUser.likes,
    user: state.payloadUser.name
  };
}

export default connect(mapStateToProps)(TopInfo);