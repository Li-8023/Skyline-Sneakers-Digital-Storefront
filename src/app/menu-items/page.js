"use client";
import UserTabs from "@/components/Layout/UserTabs";
import { useProfile } from "../../components/UseProfile";
import Link from "next/link";
import Right from "@/components/icons/Right.js";


export default function MenuItemsPage() {
  const { loading, data } = useProfile();

  if (loading) {
    return "Loading menu items...";
  }

  if (!data.admin) {
    return "Not an admin";
  }
  return (
    // <div>menu item</div>
    <section className="mt-8 max-w-md mx-auto">
      <UserTabs isAdmin={true} />
      <div className="mt-8">
        <Link className="button" href={"/menu-items/new"}>Create new menu item
        <Right/>
        </Link>
      </div>
    </section>
  );
}
