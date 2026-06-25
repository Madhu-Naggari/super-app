import Image from "next/image";
import SignupForm from "@/components/auth/SignupForm";

export default function SignupPage() {
  return (
    <main className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="w-full h-screen flex overflow-hidden bg-black">
        {/* Left Side */}
        <div className="relative hidden md:block w-1/2">
          <Image
            src="/signup-bg.jpg"
            alt="concert"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/20" />

          <div className="absolute bottom-10 left-8">
            <h2 className="text-white text-5xl font-bold leading-tight">
              Discover new things on
            </h2>

            <h2 className="text-white text-5xl font-bold">Superapp</h2>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2 flex items-center justify-center bg-black">
          <SignupForm />
        </div>
      </div>
    </main>
  );
}
