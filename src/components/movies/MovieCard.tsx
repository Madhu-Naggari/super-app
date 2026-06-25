interface Props {
  movie: any;
  onClick: () => void;
}

export default function MovieCard({ movie, onClick }: Props) {
  return (
    <div
      onClick={onClick}
      className="
      cursor-pointer
      transition
      duration-300
      hover:scale-105
      hover:shadow-xl
      "
    >
      <img
        src={movie.Poster}
        alt={movie.Title}
        className="rounded-lg w-full h-72 object-cover"
      />

      <h3 className="mt-2 font-semibold">{movie.Title}</h3>
    </div>
  );
}
