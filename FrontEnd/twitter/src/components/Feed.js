import React from "react";
import Createpost from "./Createpost";
import Tweet from "./Tweet.js";
import { useSelector } from "react-redux";

const Feed = () => {
  const { tweets } = useSelector((store) => store.tweet);
  return (
    <div className="w-[60%] border border-gray-200 m-5 shadow-lg">
      <div>
        <Createpost />
        {tweets?.map((tweet) => (
          <Tweet key={tweet?._id} tweet={tweet} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
