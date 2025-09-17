import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { BlurCircle } from "./BlurCircle";
import { dummyShowsData } from "../assets/assets";
import { MovieCard } from "./MovieCard";

export const FeaturedSection = () => {
  const navigate = useNavigate();

  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-40 overflow-hidden w-full mx-auto max-w-screen">
      <div className="relative flex items-center justify-center pt-20 pb-10">
        <p className="text-gray-300 font-medium text-4xl text-center">Now Showing</p>
        <BlurCircle top="0" right="-80px" />
      </div>

      <div className="flex flex-wrap justify-center gap-6 mt-8 w-full">
        {dummyShowsData.slice(0, 10).map((show) => (
          <MovieCard key={show._id} movie={show} />
        ))}
      </div>

      <div className="flex justify-center mt-20">
        <button
          onClick={() => {
            navigate("/movies"), scrollTo(0, 0);
          }}
          className="px-10 py-3 text-sm bg-primary hover:bg-primary-dull transition rounded-md font-medium cursor-pointer"
        >
          Show More
        </button>
      </div>
    </div>
  );
};
