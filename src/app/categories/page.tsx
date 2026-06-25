"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import CategoryCard from "@/components/category/CategoryCard";
import { storage } from "@/utils/localStorage";
import { useUserStore } from "@/store/useUserStore";

const categories = [
  {
    title: "Action",
    image: "/categories/action.png",
    color: "#FF5209",
  },
  {
    title: "Drama",
    image: "/categories/drama.png",
    color: "#D7A4FF",
  },
  {
    title: "Romance",
    image: "/categories/romance.png",
    color: "#148A08",
  },
  {
    title: "Thriller",
    image: "/categories/thriller.png",
    color: "#84C2FF",
  },
  {
    title: "Western",
    image: "/categories/western.png",
    color: "#902500",
  },
  {
    title: "Fantasy",
    image: "/categories/fantasy.png",
    color: "#6CD061",
  },
  {
    title: "Horror",
    image: "/categories/horror.png",
    color: "#7358FF",
  },
  {
    title: "Music",
    image: "/categories/music.png",
    color: "#E61E32",
  },
  {
    title: "Fiction",
    image: "/categories/fiction.png",
    color: "#6CD061",
  },
];

export default function CategoriesPage() {
  const router = useRouter();

  const [selected, setSelected] = useState<string[]>([]);
  const [error, setError] = useState("");

  const setCategories = useUserStore((state) => state.setCategories);

  const toggleCategory = (category: string) => {
    if (selected.includes(category)) {
      setSelected(selected.filter((item) => item !== category));
    } else {
      setSelected([...selected, category]);
    }

    setError("");
  };

  const handleNext = () => {
    if (selected.length < 3) {
      setError("Minimum 3 categories required");
      return;
    }

    setCategories(selected);

    storage.setItem("categories", selected);

    router.push("/dashboard");
  };

  return (
    <main className="min-h-screen bg-black text-white px-8 py-10">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
        {/* Left Side */}

        <div>
          <h1
            className="text-[#72DB73] text-6xl"
            style={{
              fontFamily: "cursive",
            }}
          >
            Super app
          </h1>

          <h2 className="text-5xl font-bold mt-10 leading-tight">
            Choose your
            <br />
            entertainment
            <br />
            category
          </h2>

          <div className="flex flex-wrap gap-3 mt-10">
            {selected.map((item) => (
              <div
                key={item}
                className="
                bg-[#148A08]
                px-4
                py-2
                rounded-full
                flex
                items-center
                gap-2
              "
              >
                {item}

                <button
                  onClick={() => toggleCategory(item)}
                  className="font-bold"
                >
                  X
                </button>
              </div>
            ))}
          </div>

          {error && <p className="text-red-500 mt-5">⚠ {error}</p>}
        </div>

        {/* Right Side */}

        <div>
          <div className="grid grid-cols-3 gap-5">
            {categories.map((category) => (
              <CategoryCard
                key={category.title}
                title={category.title}
                image={category.image}
                color={category.color}
                selected={selected.includes(category.title)}
                onClick={() => toggleCategory(category.title)}
              />
            ))}
          </div>

          <div className="flex justify-end mt-8">
            <button
              onClick={handleNext}
              className="
                bg-[#148A08]
                px-12
                py-3
                rounded-full
                text-white
                font-semibold
                hover:opacity-90
                transition
              "
            >
              Next Page
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
