import { HomeIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const TopNav = () => {
  return (
    <div className="w-full h-16 bg-slate-600 shadow-md">
      <div className="max-w-6xl items-center h-full flex  mx-auto">
        <div className="flex items-center justify-between w-full">
          <Link to="/">
            <HomeIcon className="w-10 h-10 text-white" />
          </Link>
          <h1 className="text-2xl text-white ml-2">QuadB Tech</h1>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
