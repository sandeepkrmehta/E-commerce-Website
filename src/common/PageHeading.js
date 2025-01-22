import React from "react";
import { Link } from "react-router-dom";

const PageHeading = ({ home, pagename }) => {
  return (
    <div className="w-11/12 md:w-10/12 mx-auto">
      <div className="bg-img relative py-10 md:py-20 flex justify-center items-center">
        <div className="text-center">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-800">
            {pagename}
          </h1>
          <p className="text-sm md:text-base text-gray-700 mt-2">
            <Link to="/" className="hover:text-yellow-500 capitalize">
              {home}
            </Link>{" "}
            <span className="mx-2"> &gt; </span>
            <span className="capitalize">{pagename}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PageHeading;
