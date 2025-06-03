"use client";
import { supabase } from "@/services/supabaseClient";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

function Login() {
  const signInWithGoogle = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        scopes:
          "https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile openid",
        redirectTo: `${window.location.origin}`, // Will redirect to homepage after login
      },
    });

    if (error) {
      console.error("Error signing in with Google:", error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="flex flex-col items-center justify-center gap-4 p-8 border rounded-2xl">
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
          />
          <h2 className="text-2xl font-bold text-center mt-3.5">
            Welcome to Ai Recruiter
          </h2>
          <p className="text-gray-500 text-center">
            Sign in With Google Authentication
          </p>
          <Button className="mt-7 w-full" onClick={signInWithGoogle}>
            Login with Google
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Login;
