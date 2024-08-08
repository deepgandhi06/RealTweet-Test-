import React from "react";
import Avatar from "react-avatar";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
const RightsideBar = ({ otherUsers }) => {
  return (
    <div className="w-[25%]">
      <div className="flex items-center p-2 rounded-full bg-gray-200 outline-none text-gray-600 w-full">
        <CiSearch size="20px" />
        <input
          type="text"
          placeholder="Search"
          className="outline-none bg-inherit px-2"
        />
      </div>
      <div className="p-4 my-2 rounded-2xl border border-black-50 bg-gray-100">
        <h1 className="p-2 font-bold text-lg">Who to follow</h1>
        {otherUsers?.map((user) => {
          return (
            <div
              key={user?._id}
              className="flex items-center justify-between my-3"
            >
              <div className="flex">
                <div>
                  <Avatar
                    src="https://pbs.twimg.com/profile_images/1703261403237502976/W0SFbJVS_400x400.jpg"
                    size="40"
                    round={true}
                  />
                </div>
                <div className="ml-2">
                  <h1 className="font-bold">{user?.name}</h1>
                  <p className="text-sm">{`@${user?.username}`}</p>
                </div>
              </div>
              <div>
                <Link to={`/profile/${user?._id}`}>
                  <button className="px-4 py-1 bg-black text-white rounded-full">
                    Profile
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RightsideBar;
