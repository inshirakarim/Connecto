import React from 'react'
import "./comments.css"

function Comments() {
  return (
         <div className="comments">
      <div className="write">
        <img src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
        <input type="text" placeholder="write a comment" />
        <button>Send</button>
      </div>
        <div className="comment">
          <img src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
          <div className="info">
            <span>Inshira</span>
            <p>Haan jaa rahe ho tum toh kya</p>
          </div>
          <span className="date">1 hour ago</span>
        </div>
      
    </div>
  )
}

export default Comments