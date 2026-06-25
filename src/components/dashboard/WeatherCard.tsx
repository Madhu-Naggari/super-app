"use client";

import { useEffect, useState } from "react";
import { getWeather } from "@/services/weather";

interface WeatherData {
  main: {
    temp: number;
    pressure: number;
    humidity: number;
  };
  wind: {
    speed: number;
  };
}

export default function WeatherCard() {
  const [weather, setWeather] = useState<WeatherData | null>(null);

  const [dateTime, setDateTime] = useState("");

  useEffect(() => {
    getWeather().then(setWeather);

    const updateTime = () => {
      const now = new Date();

      setDateTime(
        now.toLocaleString("en-IN", {
          day: "2-digit",
          month: "long",
          year: "numeric",
          hour: "numeric",
          minute: "2-digit",
        }),
      );
    };

    updateTime();

    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!weather) {
    return <div className="h-[200px] bg-[#101744] rounded-3xl animate-pulse" />;
  }

  return (
    <div className="overflow-hidden rounded-3xl">
      {/* Top Date Strip */}

      <div className="bg-[#FF4ADE] text-white py-3 px-6 flex justify-between font-semibold">
        <span>{dateTime.split(",")[0]}</span>

        <span>{dateTime.split(",")[1]}</span>
      </div>

      {/* Body */}

      <div className="bg-[#101744] text-white p-8">
        <div className="grid grid-cols-3 items-center">
          <div className="text-center">
            <div className="text-6xl">☁️</div>

            <p className="mt-2 text-xl">
              {Math.round(weather.main.temp)}
              °C
            </p>
          </div>

          <div className="text-center">
            <p className="text-lg">Pressure</p>

            <h3 className="text-3xl font-bold mt-2">{weather.main.pressure}</h3>
          </div>

          <div className="text-center">
            <p className="text-lg">Wind</p>

            <h3 className="text-3xl font-bold mt-2">{weather.wind.speed}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
