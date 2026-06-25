import { z } from "zod";

export const signupSchema = z.object({
  name: z.string().min(2, "Name is required"),

  username: z.string().min(3, "Username is required"),

  email: z.string().email("Invalid email"),

  mobile: z.string().regex(/^[0-9]{10}$/, "Enter valid mobile number"),

  acceptedTerms: z.boolean().refine((val) => val === true, {
    message: "Please accept terms",
  }),
});

export type SignupFormData = z.infer<typeof signupSchema>;
