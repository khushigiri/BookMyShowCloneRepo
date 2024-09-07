import React, { useState } from "react";

// Layout HOC
import DefaultLayoutHoc from "../layouts/Default.layout";

// Components
import EntertainmentCardComponent from "../components/Entertainment/EntertainmentCardComponent";
import HeroCarousel from "../components/HeroCarousel/HeroCarousel.Component";
import PosterSlider from "../components/PosterSlider/PosterSlider.Component";

const HomePage = () => {
  const [recommendedMovies, setRecommendedMovies] = useState([]);
  const [premierMovies, setPremierMovies] = useState([]);
  const [onlineStreamEvents, setOnlineStreamEvents] = useState([]);

  return (
    <>
      <HeroCarousel />
      <div className="container mx-auto px-4 md:px-12 my-8">
        <h1 className="text-2x1 font-bold text-gray-800 sm:ml-3 ml-0 my-3">
          The best of Entertainment here
        </h1>
        <EntertainmentCardComponent />
      </div>

      <div className="container mx-auto px-4 md:px">
        <PosterSlider
          title="Recommmended Movies"
          subject="List of recommened movies"
          posters={recommendedMovies}
          isDark={false}
        />
      </div>

      <div className="bg-premier-800 py-12">
        <div className="container mx-autopx-4 md:px-12 my-8 flex flex-xol gap-3">
          <div className="hidden md:flex">
            <img src="" alt="Rupay" className="w-full h-full" />
          </div>
          <PosterSlider
            title="Premiers"
            subject="Brand new releases every Friday"
            posters={premierMovies}
            isDark={false}
          />
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-12 my-8">
        <PosterSlider
          title="Online Streaming Events"
          subject="Online Stream Events"
          posters={onlineStreamEvents}
          isDark={false}
        />
      </div>
    </>
  );
};

export default DefaultLayoutHoc(HomePage);
