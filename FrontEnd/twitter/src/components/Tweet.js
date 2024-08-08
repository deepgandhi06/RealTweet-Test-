import React from "react";
import Avatar from "react-avatar";
import { AiOutlineComment } from "react-icons/ai";
import { CiBookmark } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import axios from "axios";
import { TWEET_API_END_POINT } from "../utils/constant";
import toast from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import { getRefresh } from "../redux/tweetSlice";
import { timeSince } from "../utils/constant";
import { MdDelete } from "react-icons/md";

const Tweet = ({ tweet }) => {
  const { user } = useSelector((store) => store.user);

  const dispatch = useDispatch();
  const likeOrDislikeHandler = async (id) => {
    try {
      const res = await axios.put(
        `${TWEET_API_END_POINT}/like/${id}`,
        { id: user?._id },
        {
          withCredentials: true,
        }
      );
      console.log(res);
      dispatch(getRefresh());
      toast.success(res.data.message);
    } catch (error) {
      toast.success(error.response.data.message);
      console.log(error);
    }
  };
  const deleteTweetHandler = async (id) => {
    try {
      axios.defaults.withCredentials = true;
      const res = await axios.delete(`${TWEET_API_END_POINT}/delete/${id}`);
      console.log(res);
      dispatch(getRefresh());
      toast.success(res.data.message);
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    }
  };

  return (
    <div className=" border-b border-gray-200">
      <div>
        <div className="flex p-4">
          <Avatar
            src="https://pbs.twimg.com/profile_images/1703261403237502976/W0SFbJVS_400x400.jpg"
            size="40"
            round={true}
          />
          <div className="ml-5 w-full">
            <div className="flex items-center">
              <h1 className="font-bold">{tweet?.userDetails[0].name}</h1>
              <p className="text-gray-500 text-sm ">{`@${tweet?.userDetails[0].username} .1m`}</p>
            </div>
            <div>
              <p>{tweet?.description}</p>
            </div>
            <div className="flex justify-between ">
              <div className="flex items-center">
                <div className="p-2 hover:bg-gray-300 rounded-full cursor-pointer">
                  <AiOutlineComment size="24px" />
                </div>
                <p className="ml-5">0</p>
              </div>
              <div className="flex items-center">
                <div
                  onClick={() => likeOrDislikeHandler(tweet?._id)}
                  className="p-2 hover:bg-gray-300 rounded-full cursor-pointer"
                >
                  <CiHeart size="24px" />
                </div>
                <p className="ml-5">{tweet?.like?.length}</p>
              </div>
              <div className="flex items-center">
                <div className="p-2 hover:bg-gray-300 rounded-full cursor-pointer">
                  <CiBookmark size="24px" />
                </div>
                <p className="ml-5">0</p>
              </div>
              {user?._id === tweet?.userId && (
                <div
                  onClick={() => deleteTweetHandler(tweet?._id)}
                  className="flex items-center"
                >
                  <div className="p-2 hover:bg-red-300 rounded-full cursor-pointer">
                    <MdDelete size="24px" />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
