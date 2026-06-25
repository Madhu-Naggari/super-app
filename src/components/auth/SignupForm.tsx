"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { signupSchema, SignupFormData } from "@/utils/signupSchema";

import { useUserStore } from "@/store/useUserStore";
import { storage } from "@/utils/localStorage";

export default function SignupForm() {
  const router = useRouter();

  const setUser = useUserStore((state) => state.setUser);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: "",
      username: "",
      email: "",
      mobile: "",
      acceptedTerms: false,
    },
  });

  const onSubmit = (data: SignupFormData) => {
    const userData = {
      name: data.name,
      username: data.username,
      email: data.email,
      mobile: data.mobile,
    };

    setUser(userData);

    storage.setItem("user", userData);

    router.push("/categories");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-[360px]">
      <div className="text-center mb-6">
        <h1
          className="text-[#72DB73] text-6xl mb-5"
          style={{
            fontFamily: "cursive",
          }}
        >
          Super app
        </h1>

        <p className="text-white text-sm mt-2">Create your new account</p>
      </div>

      {/* Name */}
      <input
        {...register("name")}
        placeholder="Name"
        className="
          w-full
          bg-[#292929]
          text-white
          px-4
          py-3
          rounded-sm
          outline-none
          mb-1
        "
      />

      <p className="text-red-500 text-xs mb-3">{errors.name?.message}</p>

      {/* Username */}
      <input
        {...register("username")}
        placeholder="UserName"
        className="
          w-full
          bg-[#292929]
          text-white
          px-4
          py-3
          rounded-sm
          outline-none
          mb-1
        "
      />

      <p className="text-red-500 text-xs mb-3">{errors.username?.message}</p>

      {/* Email */}
      <input
        {...register("email")}
        placeholder="Email"
        className="
          w-full
          bg-[#292929]
          text-white
          px-4
          py-3
          rounded-sm
          outline-none
          mb-1
        "
      />

      <p className="text-red-500 text-xs mb-3">{errors.email?.message}</p>

      {/* Mobile */}
      <input
        {...register("mobile")}
        placeholder="Mobile"
        className="
          w-full
          bg-[#292929]
          text-white
          px-4
          py-3
          rounded-sm
          outline-none
          mb-1
        "
      />

      <p className="text-red-500 text-xs mb-3">{errors.mobile?.message}</p>

      {/* Checkbox */}
      <label className="flex items-center gap-2 mt-3 text-[11px] text-[#7C7C7C]">
        <input type="checkbox" {...register("acceptedTerms")} />

        <span>Share my registration data with Superapp</span>
      </label>

      <p className="text-red-500 text-xs mt-1">
        {errors.acceptedTerms?.message}
      </p>

      {/* Button */}
      <button
        type="submit"
        className="
          w-full
          bg-[#72DB73]
          text-white
          py-3
          rounded-full
          font-semibold
          mt-4
          hover:opacity-90
          transition
        "
      >
        SIGN UP
      </button>

      {/* Footer Text */}
      <div className="mt-4 text-[10px] leading-4 text-[#7C7C7C]">
        <p>
          By clicking on Sign up, you agree to Superapp Terms and Conditions of
          Use.
        </p>

        <p className="mt-2">
          To learn more about how Superapp collects, uses and protects your
          personal data, please read Superapp Privacy Policy.
        </p>
      </div>
    </form>
  );
}
