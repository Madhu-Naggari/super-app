"use client";

import { useEffect, useState } from "react";
import { storage } from "@/utils/localStorage";

export default function NotesCard() {
  const [mounted, setMounted] = useState(false);
  const [notes, setNotes] = useState("");

  useEffect(() => {
    setMounted(true);

    const saved = storage.getItem<string>("notes") || "";

    setNotes(saved);
  }, []);

  if (!mounted) {
    return <div className="bg-[#FFCB4C] rounded-3xl h-[320px]" />;
  }

  return (
    <div className="bg-[#FFCB4C] rounded-3xl h-[320px] overflow-hidden">
      <div className="px-6 py-4">
        <h2 className="text-black text-4xl font-bold">All Notes</h2>
      </div>

      <textarea
        value={notes}
        onChange={(e) => {
          setNotes(e.target.value);
          storage.setItem("notes", e.target.value);
        }}
        placeholder="Write your notes..."
        className="w-full h-[240px] bg-transparent resize-none outline-none px-6 pb-6 text-black text-lg"
      />
    </div>
  );
}
