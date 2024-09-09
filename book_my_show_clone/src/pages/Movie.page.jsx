import React, { useEffect, useState } from "react";
import MovieLayoutHoc from "../layouts/Movie.layout";
import { useParams } from "react-router-dom";
import axios from "axios";

const MoviePage = () => {
  const { id } = useParams();

  const [cast, setCast] = useState();

  useEffect(() => {
    const requestCast = async () => {
      const getCast = await axios.get(`/${id}/credits`);
      setCast(getCast.data.cast);
    };
    requestCast();
  }, []);
  return <div>MoviePage</div>;
};

export default MovieLayoutHoc(MoviePage);
