"use client";
import UserForm from "@/components/Layout/UserForm";
import UserTabs from "@/components/Layout/UserTabs";
import { useProfile } from "@/components/UseProfile";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function EditUserPage() {
  const { data, loading } = useProfile();
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/api/profile?_id="+id).then((res) => {
      res.json().then((user) => {
        setUser(user);
      });
    });
  }, []);

  function handleSaveButtonClick(ev, data){
    ev.preventDefault();

    const savingPromise = new Promise(async (resolve, reject) => {
      const response = await fetch("/api/profile", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, _id: id }),
      });

      if(response.ok)
        resolve();
      else  
        reject();
    });

    
    toast.promise(savingPromise, {
      loading: "Saving...",
      success: () => {
        window.location.href = "/users";
        return "Profile saved successfully!";
      },
      error: "Couldn't save profile",
    });
    
  }



  if (loading) {
    return "Loading user info...";
  }

  if (!data.admin) {
    return "Not an admin";
  }
  return (
    <section className="mt-8 mx-auto max-w-lg">
      <UserTabs isAdmin={true} />
      <div className="mt-8">
        <UserForm user={user} onSave={handleSaveButtonClick}/>
      </div>
    </section>
  );
}
