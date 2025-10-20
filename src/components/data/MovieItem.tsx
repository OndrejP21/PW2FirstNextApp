import { Movie } from "@/types/data";
import StringWriter from "./StringWriter";

export default function MovieItem({ movie }: { movie: Movie }) {
  return (
    <div className="bg-gray-600 text-white p-3 rounded-lg">
      <div className="flex justify-between items-center">
        <h3 className="font-bold text-xl w-[200px]">{movie.title}</h3>

        <div>{movie.year}</div>

        <div className="text-lg">
          {movie.isAnimated ? "Animován" : "Hraný lidmi"}
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div>
          <StringWriter fields={movie.languages} />
        </div>

        <div>
          <StringWriter fields={movie.genre} />
        </div>

        <div>
          <strong>Hodnocení</strong>: {movie.rating}
        </div>
      </div>
    </div>
  );
}
