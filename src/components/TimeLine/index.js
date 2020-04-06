import React, { Component } from "react";
import Post from "./posts"
import { connect } from "react-redux";

class TimeLine extends Component {
   
   render() {
      const posts = this.props.posts
      
      return (
         <div className="timeline">
         {         
            posts.map(post => (
               <Post key={post.id}
               userPicture={post.userPicture}
               userName={post.user}
               location={post.location}
               postPicture={post.postPicture}
               description={post.description}/>
               ))
         }
         </div>
      );
   }      
}    

function mapStateToProps(state) {
   return {
      posts: state.payloadPosts
   };
}

export default connect(mapStateToProps)(TimeLine)
