import React from "react";
import './Widgets.css'
import SearchIcon from "@mui/icons-material/Search";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";

const Widgets = () => {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchicon" />
        <input type="text" placeholder="Search Twitter" />
      </div>

      <div className="widgets__widget--container">
        <h2>What's happening</h2>
        <TwitterTweetEmbed tweetId={"1574002943052972033"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="elonmusk"
          options={{ height: 400 }}
        />
        <TwitterShareButton
          url={"https://facebook.com/elonmusk"}
          options={{ text: "#reactjs is awesome", via: "@im9n_frontend" }}
        />
      </div>
    </div>
  );
};

export default Widgets;
