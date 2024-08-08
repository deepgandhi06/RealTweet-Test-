import React from "react";
import { CiHome } from "react-icons/ci";
import { HiOutlineHashtag } from "react-icons/hi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
import { IoLogOutOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { USER_API_END_POINT } from "../utils/constant";
import toast from "react-hot-toast";
import { getMyProfile, getOtherUsers, getUser } from "../redux/userSlice";

const LeftsideBar = () => {
  const { user } = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${USER_API_END_POINT}/logout`);
      dispatch(getUser(null));
      dispatch(getOtherUsers(null));
      dispatch(getMyProfile(null));
      navigate("/login");
      toast.success(res.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-[20%]">
      <div>
        <img
          width={"24px"}
          src="https://img.freepik.com/premium-psd/black-brand-new-twitter-x-logo-icon_1129635-1.jpg"
          alt="Logo"
        ></img>
      </div>

      <div className="my-5">
        <Link
          to="/"
          className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full"
        >
          <div>
            <CiHome />
          </div>
          <h1 className="font-bold text-lg ml-2">Home</h1>
        </Link>

        <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full">
          <div>
            <HiOutlineHashtag />
          </div>
          <h1 className="font-bold text-lg ml-2">Explore</h1>
        </div>

        <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full">
          <div>
            <IoIosNotificationsOutline />
          </div>
          <h1 className="font-bold text-lg ml-2">Notifications</h1>
        </div>

        <Link
          to={`/profile/${user?._id}`}
          className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full"
        >
          <div>
            <FaRegUserCircle />
          </div>
          <h1 className="font-bold text-lg ml-2">Profile</h1>
        </Link>

        <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full">
          <div>
            <FaRegBookmark />
          </div>
          <h1 className="font-bold text-lg ml-2">Bookmarks</h1>
        </div>

        <div
          onClick={logoutHandler}
          className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full"
        >
          <div>
            <IoLogOutOutline />
          </div>
          <h1 className="font-bold text-lg ml-2">Logout</h1>
        </div>

        <button className="px-4 py-2 border=none text-md bg-[#1D9BF0] w-full rounded-full">
          Post
        </button>
      </div>
    </div>
  );
};

export default LeftsideBar;
