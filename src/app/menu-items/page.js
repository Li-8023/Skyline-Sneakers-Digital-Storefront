"use client";
import UserTabs from "@/components/Layout/UserTabs";
import { useProfile } from "../../components/UseProfile";
import Link from "next/link";
import Right from "@/components/icons/Right.js";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function MenuItemsPage() {
  const [menuItems, setMenuItems] = useState([]);
  const { loading, data } = useProfile();
  useEffect(() => {
    fetch("/api/menu-items").then((res) => {
      res.json().then((menuItems) => {
        setMenuItems(menuItems);
      });
    });
  }, []);

  if (loading) {
    return "Loading menu items...";
  }

  if (!data.admin) {
    return "Not an admin";
  }
  return (
    // <div>menu item</div>
    <section className="mt-8 max-w-lg mx-auto">
      <UserTabs isAdmin={true} />
      <div className="mt-8">
        <Link className="button" href={"/menu-items/new"}>
          Create new menu item
          <Right />
        </Link>
      </div>
      <div>
        <h2 className="text-sm text-gray-500 mt-8">Edit menu item:</h2>
        <div className="grid grid-cols-3 gap-2">
          {menuItems?.length > 0 &&
            menuItems.map((item) => (
              <Link
                href={"/menu-items/edit/" + item._id}
                className=" bg-gray-200 rounded-lg p-4 "
              >
                <div className="relative">
                  <Image className="rounded-md" src={item.image} alt={""} width={200} height={200} />
                </div>
                <div className="text-center">{item.name}</div>
              </Link>
            ))}
        </div>
      </div>
    </section>
  );
}
