"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { storage } from "@/utils/localStorage";

interface UserData {
  name: string;
  username: string;
  email: string;
  mobile: string;
}

export default function ProfileCard() {
  const [user, setUser] = useState<UserData | null>(null);

  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    const savedUser = storage.getItem<UserData>("user");

    const savedCategories = storage.getItem<string[]>("categories") || [];

    setUser(savedUser);
    setCategories(savedCategories);
  }, []);

  if (!user) return null;

  return (
    <div className="bg-[#5746EA] rounded-3xl overflow-hidden h-[320px]">
      <div className="flex p-5 gap-5">
        <div className="relative w-[120px] h-[250px] shrink-0">
          <Image
            src="/profile.png"
            alt="profile"
            fill
            className="object-cover rounded-xl"
          />
        </div>

        <div className="flex-1">
          <p className="text-white text-lg">{user.name}</p>

          <p className="text-white text-lg">{user.email}</p>

          <h2 className="text-white text-3xl font-bold mt-1">
            {user.username}
          </h2>

          <div className="flex flex-wrap gap-3 mt-6">
            {categories.map((cat) => (
              <div
                key={cat}
                className="
                  bg-[#9F94FF]
                  text-white
                  px-4
                  py-2
                  rounded-full
                  text-sm
                "
              >
                {cat}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
