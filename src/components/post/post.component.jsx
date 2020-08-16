import React from "react";

import "./post.style.scss";

const Post = ({ renter, city, caption, image }) => {
  return (
    <div className="post">
      <div className="post_header">
        <span>
          <div className="post_header_renter">{renter}</div>
          <div classname="post_header_adress">{city}</div>
        </span>
      </div>
      <img className="post_image" src={image} alt="" />

      <div className="post_caption">
        <span className="post_caption_text">{caption}</span>
      </div>
    </div>
  );
};

export default Post;
