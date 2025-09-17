import { dummyShowsData } from "../assets/assets";
import { BlurCircle } from "../components/BlurCircle";
import { MovieCard } from "../components/MovieCard";

export const Favorite = () => {
  // 🧠 Logic

  return dummyShowsData.length > 0 ? (
    <div className="relative my-40 mb-60 px-6 md:px-16 lg:px-40 xl:px-44 overflow-hidden min-h-[80vh]">
      <BlurCircle top="150px" left="0px" />
      <BlurCircle bottom="90px" right="50px" />
      <h1 className=" my-4 font-medium text-4xl text-center mb-10">Your Favorites Movies</h1>
      <div className="flex flex-wrap justify-center gap-8">
        {dummyShowsData.map((movie) => (
          <MovieCard movie={movie} key={movie._id} />
        ))}
      </div>
    </div>
  ) : (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold text-center">No movies available</h1>
    </div>
  );
};
