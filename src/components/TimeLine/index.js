import React, { Component } from "react";
import axios from "axios";
import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import { connect } from "react-redux";
import { GoVerified } from "react-icons/go";

class TimeLine extends Component {
  state = {
    posts: [],
    like: false,
  };

  componentDidMount = async () => {
    await axios.get("http://localhost:3000/posts").then((resposta) => {
      this.setState({ posts: resposta.data });
    });
  };

  newLike = async () => {
    this.props.user.likes++;

    await axios.put("http://localhost:3000/user", this.props.user);
    this.setState({ like: true });

    this.props.dispatch({
      type: "NEW_LIKE",
      payload: this.props.user,
    });
  };

  unLike = async () => {
    this.props.user.likes--;

    await axios.put("http://localhost:3000/user", this.props.user);
    this.setState({ like: false });

    this.props.dispatch({
      type: "UN_LIKE",
      payload: this.props.user,
    });
  };

  render() {
    const { posts } = this.state;

    return (
      <div className="post">
        {posts !== undefined && (
          <ul>
            {posts.map((post) => (
              <ul key={post.id}>
                <header>
                  <img src={post.userPicture} alt="user" />
                  <div className="post-user">
                    <strong>{post.user}<GoVerified /></strong>
                    <span>{post.location}</span>
                  </div>
                </header>
                <div className="post-image">
                  <img src={post.postPicture} alt="post" />
                </div>
                <div className="post-likes">
                  {this.state.like == true ? (
                    <div className="faheart">
                      <FaHeart onClick={this.unLike} />
                    </div>
                  ) : (
                      <div className="fiheart">
                        <FiHeart onClick={this.newLike} />
                      </div>
                    )}
                </div>
                <div>
                  <p>{post.description}</p>
                </div> <br />
              </ul>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.payloadUser,
  };
}

export default connect(mapStateToProps)(TimeLine);
