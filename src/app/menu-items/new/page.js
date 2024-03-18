"use client";
import UserTabs from "@/components/Layout/UserTabs";
import { useProfile } from "@/components/UseProfile";
import EditableImage from "@/components/Layout/EditableImage";
import { useState } from "react";
import toast from "react-hot-toast";
import Link from "next/link";
import Left from "@/components/icons/Left";
import MenuItemForm from "@/components/Layout/MenuItemForm";


export default function NewMenuItemPage() {
  const { loading, data } = useProfile();


  async function handleFormSubmit(ev, data) {
    ev.preventDefault();
    
    const savingPromise = new Promise(async (resolve, reject) => {
      const response = await fetch("/api/menu-items", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });
      if (response.ok) {
        resolve();
      } else {
        reject();
      }
    });

    await toast.promise(savingPromise, {
      loading: "Saving this fancy item...",
      success: () => {
       
        window.location.href = "/menu-items";
        return "Saved successfully!";
      },
      error: "Error",
    });
  }

  if (loading) {
    return "Loading user info...";
  }

  if (!data.admin) {
    return "Not an admin";
  }

  return (
    <section className="mt-4">
      <UserTabs isAdmin={true} />
      <div className="max-w-lg mx-auto mt-8">
        <Link className="button" href={"/menu-items"}>
          <Left />
          <span>Show all menu items</span>
        </Link>
      </div>
      <MenuItemForm menuItem={null} onSubmit={handleFormSubmit}/>
    </section>
  );
}
