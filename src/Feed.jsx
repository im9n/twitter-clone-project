import React, { useEffect, useState } from "react";
import TweetBox from "./components/TweetBox";
import "./Feed.css";
import Post from "./components/Post";
import { collection, getDocs } from "firebase/firestore"
import { db } from './firebase'

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts()
  }, [posts]);

  async function getPosts(){
  const data = await getDocs(collection(db, "posts"))
  const posts = await data.docs.map(doc => ({...doc.data(), id: doc.id}))
  setPosts(posts)
  console.log(posts)
  }

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      <TweetBox />

      {posts.map((post) => (
        <Post
          key={post.id}
          displayName={post.displayName}
          username={post.username}
          avatar={post.avatar}
          image={post.image}
          text={post.text}
          verified={post.verified}
        />
      ))}
    </div>
  );
};

export default Feed;
