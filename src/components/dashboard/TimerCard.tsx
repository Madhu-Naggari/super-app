"use client";

import { useEffect, useState } from "react";

export default function TimerCard() {
  const [hours, setHours] = useState(5);
  const [minutes, setMinutes] = useState(9);
  const [secs, setSecs] = useState(0);

  const [running, setRunning] = useState(false);
  const [paused, setPaused] = useState(false);

  const [remainingSeconds, setRemainingSeconds] = useState(5 * 3600 + 9 * 60);

  const [initialSeconds, setInitialSeconds] = useState(5 * 3600 + 9 * 60);

  const totalSeconds = hours * 3600 + minutes * 60 + secs;

  useEffect(() => {
    if (!running) return;

    const timer = setInterval(() => {
      setRemainingSeconds((prev) => {
        if (prev <= 1) {
          setRunning(false);
          setPaused(false);
          return 0;
        }

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [running]);

  useEffect(() => {
    if (running) return;

    setRemainingSeconds(totalSeconds);
    setInitialSeconds(totalSeconds);

    setPaused(false);
  }, [hours, minutes, secs]);

  const displayHours = Math.floor(remainingSeconds / 3600);

  const displayMinutes = Math.floor((remainingSeconds % 3600) / 60);

  const displaySecs = remainingSeconds % 60;

  const format = (value: number) => value.toString().padStart(2, "0");

  const radius = 120;
  const circumference = 2 * Math.PI * radius;

  const progress = initialSeconds === 0 ? 0 : remainingSeconds / initialSeconds;

  const strokeDashoffset = circumference - progress * circumference;

  const handleButton = () => {
    if (!running && !paused) {
      setRemainingSeconds(totalSeconds);
      setInitialSeconds(totalSeconds);
      setRunning(true);
      return;
    }

    if (running) {
      setRunning(false);
      setPaused(true);
      return;
    }

    if (paused) {
      setRunning(true);
    }
  };

  const buttonText = running ? "Pause" : paused ? "Resume" : "Start";

  const buttonColor = paused ? "bg-green-500" : "bg-[#FF6B6B]";

  const resetTimerState = () => {
    setRunning(false);
    setPaused(false);
  };

  return (
    <div className="bg-[#1E2343] rounded-[24px] p-8">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Circle */}

        <div className="relative w-[320px] h-[320px]">
          <svg width="320" height="320" className="-rotate-90">
            <circle
              cx="160"
              cy="160"
              r={radius}
              stroke="#0F1737"
              strokeWidth="14"
              fill="none"
            />

            <circle
              cx="160"
              cy="160"
              r={radius}
              stroke="#FF6B6B"
              strokeWidth="14"
              fill="none"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
            />
          </svg>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[230px] h-[230px] rounded-full bg-[#151B3C] flex items-center justify-center shadow-2xl">
              <span className="text-white text-5xl font-semibold">
                {format(displayHours)}:{format(displayMinutes)}:
                {format(displaySecs)}
              </span>
            </div>
          </div>
        </div>

        {/* Controls */}

        <div className="flex-1">
          <div className="grid grid-cols-3 gap-8 text-center">
            {/* Hours */}

            <div>
              <p className="text-gray-400 text-3xl mb-8">Hours</p>

              <button
                onClick={() => {
                  setHours((prev) => prev + 1);
                  resetTimerState();
                }}
                className="text-gray-400 text-3xl"
              >
                ▲
              </button>

              <h2 className="text-white text-7xl my-5">{format(hours)}</h2>

              <button
                onClick={() => {
                  setHours((prev) => Math.max(prev - 1, 0));
                  resetTimerState();
                }}
                className="text-gray-400 text-3xl"
              >
                ▼
              </button>
            </div>

            {/* Minutes */}

            <div>
              <p className="text-gray-400 text-3xl mb-8">Minutes</p>

              <button
                onClick={() => {
                  setMinutes((prev) => (prev === 59 ? 59 : prev + 1));
                  resetTimerState();
                }}
                className="text-gray-400 text-3xl"
              >
                ▲
              </button>

              <h2 className="text-white text-7xl my-5">{format(minutes)}</h2>

              <button
                onClick={() => {
                  setMinutes((prev) => Math.max(prev - 1, 0));
                  resetTimerState();
                }}
                className="text-gray-400 text-3xl"
              >
                ▼
              </button>
            </div>

            {/* Seconds */}

            <div>
              <p className="text-gray-400 text-3xl mb-8">Seconds</p>

              <button
                onClick={() => {
                  setSecs((prev) => (prev === 59 ? 59 : prev + 1));
                  resetTimerState();
                }}
                className="text-gray-400 text-3xl"
              >
                ▲
              </button>

              <h2 className="text-white text-7xl my-5">{format(secs)}</h2>

              <button
                onClick={() => {
                  setSecs((prev) => Math.max(prev - 1, 0));
                  resetTimerState();
                }}
                className="text-gray-400 text-3xl"
              >
                ▼
              </button>
            </div>
          </div>

          <div className="flex justify-center mt-10">
            <button
              onClick={handleButton}
              className={`
                w-full
                max-w-[650px]
                h-[70px]
                rounded-full
                text-white
                text-3xl
                font-medium
                ${buttonColor}
              `}
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
