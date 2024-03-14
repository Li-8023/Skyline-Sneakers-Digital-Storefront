"use client";
import UserTabs from "@/components/Layout/UserTabs";
import { UseProfile } from "../../components/UseProfile";

export default function MenuItemsPage() {
  const { loading, data } = UseProfile();

  if (loading) {
    return "Loading user info...";
  }

  if (!data.admin) {
    return "Not an admin";
  }
  return (
    <section className="mt-4">
      <UserTabs isAdmin={true} />
      <form className="mt-8">
        <div className="flex gap-2">
          <div>
            <label>Menu item name</label>
            <input type="text"></input>
          </div>{" "}
          <div></div>
        </div>
      </form>
    </section>
  );
}
