import { Movie } from "@/types/data";
import data from "../../../public/data.json";
import MovieItem from "@/components/data/MovieItem";

export default function DataPage() {
  const movies: Array<Movie> = data.filter((x) => x.rating > 8);

  return (
    <div>
      <div>
        Počet zobrazných položek: <strong>{movies.length}</strong>
      </div>
      <div className="grid grid-cols-3 gap-4 justify-center items-center p-10 border-2 border-black">
        {movies.map((x) => (
          <MovieItem key={x.id} movie={x} />
        ))}
      </div>
    </div>
  );
}
