import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@mui/material";
import { db } from '../firebase'
import { collection, addDoc } from "firebase/firestore"

const TweetBox = () => {
  const [tweetMessage, setTweetMessage] = useState("")
  const [tweetImg, setTweetImg] = useState("")

  async function sendTweet(event){
    event.preventDefault()
    const post = {
      displayName: "Iman Musa",
      username: "@im9n_frontend",
      avatar: "https://lh3.googleusercontent.com/-E6lH4F00x1M/AAAAAAAAAAI/AAAAAAAAAAA/ACD5Jx47fhDAEadXd7seUdqUaKq4CH3uyg/photo.jpg?sz=46",
      text: tweetMessage,
      image: tweetImg,
      verified: true
    }
    await addDoc(collection(db, "posts"), post)
  }

  return (
    <div className="tweetbox">
      <form onSubmit={(event) => sendTweet(event)}>
        <div className="tweetbox__input">
          <Avatar src="https://lh3.googleusercontent.com/-E6lH4F00x1M/AAAAAAAAAAI/AAAAAAAAAAA/ACD5Jx47fhDAEadXd7seUdqUaKq4CH3uyg/photo.jpg?sz=46" />
          <input placeholder="What's happening?" value={tweetMessage} onChange={(event) => setTweetMessage(event.target.value)} type='text' />
        </div>
        <input type="text" placeholder="Optional: Enter image URL" value={tweetImg} onChange={(event) => setTweetImg(event.target.value)} className="tweetbox__image--input" />
        <Button className="tweetbox__button" type='submit'>Tweet</Button>
      </form>
    </div>
  );
};

export default TweetBox;
