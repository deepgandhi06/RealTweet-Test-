import React, { useEffect } from "react";
import LeftsideBar from "./LeftsideBar";
import Feed from "./Feed";
import RightsideBar from "./RightsideBar";
import useOtherUsers from "../hooks/useOtherUsers";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import useGetMyTweets from "../hooks/useGetMyTweets";

const Home = () => {
  const { user, otherUsers } = useSelector((store) => store.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [navigate, user]);
  // custom Hook
  useOtherUsers(user?._id);
  useGetMyTweets(user?._id);
  return (
    <div className="flex justify-between w-[80%] mx-auto">
      <LeftsideBar />
      <Outlet />
      <RightsideBar otherUsers={otherUsers} />
    </div>
  );
};

export default Home;
