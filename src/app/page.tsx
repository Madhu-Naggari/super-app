import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen flex flex-col justify-center items-center gap-6 bg-black">
      <h1 className="text-5xl font-bold text-green-500">Super App</h1>

      <Link href="/signup" className="bg-blue-500 px-8 py-3 rounded-lg">
        Sign Up
      </Link>

      <Link href="/dashboard" className="border px-8 py-3 rounded-lg">
        Log In
      </Link>
    </main>
  );
}
