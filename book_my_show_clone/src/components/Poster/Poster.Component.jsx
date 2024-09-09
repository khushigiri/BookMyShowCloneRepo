import React from "react";
import { Link } from "react-router-dom";

const Poster = (props) => {
  // return <div>{props.original_title}</div>;
  return (
    <Link to={"/movie/${props.id}"}>
      <div className="flex flex-xol items-start gap-2 px-1 md:px-3">
        <div className="h-40 md:h-80">
          <img
            src={"https://image.tmdb.org/t/p/original${props.poster_path}"}
            alt="Poster"
            className="w-full h-full rounded-md"
          />
        </div>
        <h3 className="{'text-lg font-bold ${props.isDark?'text-white':'text-gray-700'">
          {props.title}
        </h3>
      </div>
    </Link>
  );
};

export default Poster;
