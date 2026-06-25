interface Props {
  movie: any;
  onClose: () => void;
}

export default function MovieModal({ movie, onClose }: Props) {
  if (!movie) return null;

  return (
    <div
      className="
      fixed inset-0
      bg-black/70
      flex items-center
      justify-center
      z-50
      "
    >
      <div
        className="
        bg-zinc-900
        rounded-xl
        p-6
        max-w-lg
        w-full
        "
      >
        <img
          src={movie.Poster}
          alt=""
          className="
          w-full
          h-80
          object-cover
          rounded-lg
          "
        />

        <h2 className="text-2xl font-bold mt-4">{movie.Title}</h2>

        <p className="mt-2">⭐ {movie.imdbRating}</p>

        <p className="mt-2">{movie.Plot}</p>

        <p className="mt-2">Cast: {movie.Actors}</p>

        <button
          onClick={onClose}
          className="
          mt-4
          bg-red-500
          px-5
          py-2
          rounded
          "
        >
          Close
        </button>
      </div>
    </div>
  );
}
