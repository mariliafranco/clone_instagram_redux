import React from "react";

function Storie(props) {
   
   const { user, userPicture, time } = props
   
   return (
      <div className="storie">
         <div className="storie-image">
            <img src={userPicture} alt="user" />
         </div>
         <div className="storie-user">
            <strong>{user}</strong>
            <span>{time}</span>
         </div>
      </div>
   )
}

export default Storie