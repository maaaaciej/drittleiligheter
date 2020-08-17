import React, { useState, useEffect } from "react";
import "./feed.styles.scss";
import { db } from "../../firebase/firebase";

import Post from "../../components/post/post.component";
// import Sorting from "../../components/sorting/sorting.component";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      setPosts(snapshot.docs.map((doc) => ({ id: doc.id, post: doc.data() })));
    });
  }, []);

  console.log(posts);

  return (
    <div className="feed">
      {/* <Sorting /> */}
      {posts.length ? (
        posts
          .sort((a, b) => {
            const timeA = a.post.timestamp.seconds;
            const timeB = b.post.timestamp.seconds;
            return timeA > timeB ? -1 : 1;
          })
          .map(({ post, id }) => (
            <Post
              key={id}
              posted={post.posted}
              renter={post.renter}
              city={post.adress}
              caption={post.caption}
              image={post.image}
            />
          ))
      ) : (
        <h3 className="feed-loading">Laster inn drittleiligheter </h3>
      )}
    </div>
  );
};

export default Feed;
