"use client";
import UserTabs from "@/components/Layout/UserTabs";
import { useProfile } from "@/components/UseProfile";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Link from "next/link";
import Left from "@/components/icons/Left";
import { useParams } from "next/navigation";
import MenuItemForm from "../../../../components/Layout/MenuItemForm";
import DeleteButton from "@/components/DeleteButton";

export default function EditMenuItemPage() {
  const { id } = useParams();
  const { loading, data } = useProfile();

  const [menuItem, setMenuItem] = useState(null);

  useEffect(() => {
    fetch("/api/menu-items").then((res) => {
      res.json().then((items) => {
        const item = items.find((i) => i._id === id);
        setMenuItem(item);
      });
    });
  }, []);

  async function handleFormSubmit(ev, data) {
    ev.preventDefault();

    data = { ...data, _id: id };
    const savingPromise = new Promise(async (resolve, reject) => {
      const response = await fetch("/api/menu-items", {
        method: "PUT",
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

  async function handleDeleteClick() {
    const promise = new Promise(async (resolve, reject) => {
      const res = await fetch("/api/menu-items?_id=" + id, {
        method: "DELETE",
      });

      if (res.ok) {
        resolve();
      } else {
        reject();
      }
    });

    toast.promise(promise, {
      loading: "Deleting...",
      success: () => {
        window.location.href = "/menu-items";
        return "Delete successfully!";
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
      <MenuItemForm menuItem={menuItem} onSubmit={handleFormSubmit} />
      <div className="max-w-md mx-auto mt-2">
        <div className="max-w-xs ml-auto pl-4">
          <DeleteButton
            label="Delete this menu item"
            onDelete={handleDeleteClick}
          ></DeleteButton>
        </div>
      </div>
    </section>
  );
}
