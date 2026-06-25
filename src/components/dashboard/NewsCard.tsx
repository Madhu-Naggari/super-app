"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { getNews } from "@/services/news";

interface Article {
  title: string;
  description: string;
  urlToImage: string;
  publishedAt: string;
}

export default function NewsCard() {
  const [articles, setArticles] = useState<Article[]>([]);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    getNews().then((data) => {
      const validArticles = data.filter(
        (article: Article) => article.urlToImage,
      );

      setArticles(validArticles);
    });
  }, []);

  useEffect(() => {
    if (!articles.length) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % articles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [articles]);

  if (!articles.length) {
    return <div className="h-[750px] bg-zinc-800 rounded-3xl animate-pulse" />;
  }

  const article = articles[currentIndex];

  return (
    <div className="bg-black rounded-3xl overflow-hidden h-[750px]">
      <div className="relative h-[420px]">
        <Image
          src={article.urlToImage}
          alt={article.title}
          fill
          unoptimized
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h2 className="text-white text-2xl font-bold leading-snug">
            {article.title}
          </h2>

          <p className="text-white mt-2">
            {new Date(article.publishedAt).toLocaleDateString()}
          </p>
        </div>
      </div>

      <div className="bg-white p-6 h-[330px] overflow-auto">
        <p className="text-black text-lg leading-8">{article.description}</p>
      </div>
    </div>
  );
}
