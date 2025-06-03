"use client";
import { supabase } from "@/services/supabaseClient";
import React, { useEffect } from "react";

function Provider({ children }) {
  useEffect(() => {
    async function createNewUser() {
      // Wait for session (more reliable than getUser)
      const {
        data: { session },
        error: sessionError,
      } = await supabase.auth.getSession();

      if (sessionError || !session?.user) {
        console.warn("User session not found:", sessionError);
        return;
      }

      const user = session.user;
      console.log("Authenticated user:", user);

      // Check if user already exists
      const { data: users, error: fetchError } = await supabase
        .from("Users")
        .select("*")
        .eq("email", user.email);

      if (fetchError) {
        console.error("Error fetching user:", fetchError);
        return;
      }

      if (!users || users.length === 0) {
        // Insert new user
        const { data, error: insertError } = await supabase
          .from("Users")
          .insert([
            {
              name: user.user_metadata?.name || "No Name",
              email: user.email,
              picture: user.user_metadata?.avatar_url || "",
            },
          ]);

        if (insertError) {
          console.error("Error inserting user:", insertError);
        } else {
          console.log("New user created:", data);
        }
      } else {
        console.log("User already exists:", users);
      }
    }

    createNewUser();
  }, []);

  return <>{children}</>;
}

export default Provider;
