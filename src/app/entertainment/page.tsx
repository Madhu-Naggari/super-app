"use client";

import { useEffect, useState } from "react";

import MovieCard from "@/components/movies/MovieCard";

import MovieModal from "@/components/movies/MovieModal";

import { getMovies, getMovieDetails } from "@/services/movies";

export default function Entertainment() {
  const [movies, setMovies] = useState<any[]>([]);

  const [selectedMovie, setSelectedMovie] = useState<any>(null);

  useEffect(() => {
    const categories = JSON.parse(localStorage.getItem("categories") || "[]");

    if (!categories.length) return;

    Promise.all(categories.map((cat: string) => getMovies(cat))).then(
      (results) => {
        setMovies(results.flat());
      },
    );
  }, []);

  const openMovie = async (imdbID: string) => {
    const details = await getMovieDetails(imdbID);

    setSelectedMovie(details);
  };

  return (
    <main className="bg-black min-h-screen p-8">
      <h1 className="text-white text-4xl font-bold mb-8">Entertainment</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5">
        {movies.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            movie={movie}
            onClick={() => openMovie(movie.imdbID)}
          />
        ))}
      </div>

      {selectedMovie && (
        <MovieModal
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}
    </main>
  );
}
