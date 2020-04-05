import React, { Component } from "react";
import { FiUser, FiHeart } from "react-icons/fi";
import { connect } from "react-redux";

class TopInfo extends Component {
  render() {
    return (
      <div className="top-info">
        <span onClick={this.props.dispatch({ type: 'NEW_LIKE' })} >
          <FiHeart />
          <b>{this.props.contador}</b>
        </span>
        <span>
          <FiUser />
        </span>
      </div>
    );
  }
}
function mapStateToProps(state){
  return {
    contador: state.payload.likes,
    user: state.payload.name
  };
}

export default connect(mapStateToProps)(TopInfo);