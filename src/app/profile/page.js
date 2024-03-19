"use client";
import { useSession } from "next-auth/react";
import { redirect } from "next/dist/server/api-utils";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Link from "next/link";
import UserTabs from "@/components/Layout/UserTabs";
import UserForm from "@/components/Layout/UserForm";

export default function ProfilePage() {
  const session = useSession();
  const { status } = session;
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [profileFetched, setProfileFetched] = useState(false);


  useEffect(() => {
    if (status === "authenticated") {
      fetch("/api/profile").then(response => {
        response.json().then((data) => {
          setUser(data);
          setIsAdmin(data.admin);
          setProfileFetched(true);
        })
      });
    }
  }, [session, status]);

  async function handleProfileInfoUpdate(ev, data) {
    ev.preventDefault();

    const savingPromise = new Promise(async (resolve, reject) => {
      const response = await fetch("/api/profile", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) resolve();
      else reject();
    });

    await toast.promise(savingPromise, {
      loading: "Saving...",
      success: "Profile saved successfully!",
      error: "Couldn't save profile",
    });
  }

  if (status === "loading"|| !profileFetched) {
    return "Loading...";
  }

  if (status === "unauthenticated") {
    return redirect("/login");
  }

  return (
    <section className="mt-4">
      <UserTabs isAdmin={isAdmin} />

      <div className="max-w-md mx-auto mt-4">
        <UserForm user={user} onSave={handleProfileInfoUpdate}/>
      </div>
    </section>
  );
}
