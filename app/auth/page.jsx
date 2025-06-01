"use client";
import { supabase } from "@/services/supabaseClient"; // Importing the Supabase client instance
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
// This is a Next.js page component for the login page of the application.

function login() {
  /* Usend to Sign in Google Account */
  const signInWithGoogle = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/dashboard`,
      },
    });
    if (error) {
      console.error("Error signing in with Google:", error.message);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="flex flex-col items-center justify-center gap-4 p-8 border  rounded-2xl  ">
        <Image
          src={"/logo.png"}
          alt="Logo"
          width={250}
          height={100}
          className="w-[160px]"
        />
        <div className="flex items-center flex-col">
          <Image
            src={"/login.png"}
            alt="Login"
            width={500}
            height={400}
            className="w-[400px] h-[250px]"
          ></Image>
          <h2 className="text-2xl font-bold text-center mt-3.5">
            Welcome to Ai Recruiter{" "}
          </h2>
          <p className="text-grey-500 text-center">
            Sign in With Google Authentication
          </p>
          <Button className="mt-7 w-full" onClick={signInWithGoogle}>
            Login with Google{" "}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default login;
