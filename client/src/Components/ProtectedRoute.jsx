import React, { useEffect, useState } from "react";
// import { GetCurrentUser } from "../apis/users";
import { message, Space, Dropdown } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
// import { SetLoader } from "../redux/loadersSlice";
// import { SetUser } from "../redux/usersSlice";
// import { useSelector } from "react-redux";
// import Divider from "./Divider";
import { DownOutlined } from "@ant-design/icons";

const ProtectedRoute = ({ children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div>
        {/* header */}
      <header className="bg-blue-400 fixed top-0 w-full p-4  left-0 z-50 shadow-md">
        <nav className="container mx-auto px-6 ">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl text-black hover:text-gray-300 cursor-pointer">
              {" "}
              STREAMYARD-CLONE{" "}
            </h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 cursor-pointer text-black hover:text-gray-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
          </div>
        </nav>
        {/* <Divider /> */}
      </header>

      {/* body */}

      <div className="p-5 mt-20">{children}</div>

      {/* footer */}
      <footer className="bg-zinc-50 text-center dark:bg-neutral-700 lg:text-left mt-4 ">
        <div className="bg-black/5 p-4 text-center text-surface dark:text-white">
          {new Date().getFullYear()} © Copyright:
          <a
            href="https://tw-elements.com/"
            style={{ textDecoration: "none", color: "white" }}
          >
            
            <a
              href="https://www.github.com/Tanmoydas27"
              style={{ textDecoration: "none", color: "white" }}
            >
                {" "}
            STREAMYARD-CLONE{" "}
            </a>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default ProtectedRoute;
