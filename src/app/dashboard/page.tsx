"use client";
import ProfileCard from "@/components/dashboard/ProfileCard";
import WeatherCard from "@/components/dashboard/WeatherCard";
import NotesCard from "@/components/dashboard/NotesCard";
import NewsCard from "@/components/dashboard/NewsCard";
import TimerCard from "@/components/dashboard/TimerCard";
import { useRouter } from "next/navigation";
export default function DashboardPage() {
  const router = useRouter();
  return (
    <main className="min-h-screen bg-black px-8 py-6">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-12 gap-6">
          {/* Left Section */}
          <div className="col-span-12 lg:col-span-8">
            {/* Top */}
            <div className="grid md:grid-cols-[1.2fr_1fr] gap-6">
              <ProfileCard />
              <NotesCard />
            </div>

            {/* Weather */}
            <div className="mt-6">
              <WeatherCard />
            </div>

            {/* Timer */}
            <div className="mt-6">
              <TimerCard />
            </div>
          </div>

          {/* Right News */}
          <div className="col-span-12 lg:col-span-4">
            <NewsCard />

            <div className="flex justify-end mt-4">
              <button
                onClick={() => router.push("/entertainment")}
                className="
      bg-[#148A08]
      text-white
      px-10
      py-3
      rounded-full
      font-semibold
      "
              >
                Browse
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
