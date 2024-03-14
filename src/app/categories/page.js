"use client";
import UserTabs from "@/components/Layout/UserTabs";
import { useEffect, useState } from "react";
import { UseProfile } from "../../components/UseProfile";

export default function CategoriesPage() {
  const { loading: profileLoading, data: profileData } = UseProfile();

  if (profileLoading) {
    return "Loading user info...";
  }

  if (!profileData.admin) {
    return "Not an admin";
  }
  return (
    <section className="mt-4 max-w-lg mx-auto ">
      <UserTabs isAdmin={true} />
      <form className="mt-8">
        <div className="flex gap-2 items-end">
          <div>
            <label>New category name</label>
            <input type="text"></input>
          </div>
          <div className="pb-2">
            <button type="submit">Create</button>
          </div>
        </div>
      </form>
    </section>
  );
}
