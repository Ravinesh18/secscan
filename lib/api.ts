// lib/axios.ts

import axios from "axios";

const api = axios.create({
  baseURL: "/api",
  timeout: 10000,
  withCredentials: true, // sends cookies automatically
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;



// app/api/auth/login/route.ts

import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";

export async function POST(req: Request) {
  await connectDB();

  const { email, password } = await req.json();

  const user = await User.findOne({ email });

  return Response.json(user);
}