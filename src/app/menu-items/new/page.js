"use client";
import UserTabs from "@/components/Layout/UserTabs";
import { useProfile } from "@/components/UseProfile";
import EditableImage from "@/components/Layout/EditableImage";
import { useState } from "react";
import toast from "react-hot-toast";
import Link from "next/link";
import Left from "@/components/icons/Left";

export default function NewMenuItemPage() {
  const { loading, data } = useProfile();
  const [name, setName] = useState("");
  const [basePrice, setBasePrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  async function handleFormSubmit(ev) {
    ev.preventDefault();

    const data = { image, name, description, basePrice };
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
      success: "Saved successfully!",
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
      <div className="max-w-md mx-auto mt-8">
        <Link className="button" href={"/menu-items"}>
          <Left />
          <span>Show all menu items</span>
        </Link>
      </div>
      <form onSubmit={handleFormSubmit} className="mt-8 max-w-md mx-auto">
        <div
          className="grid items-start gap-4 gap-2"
          style={{ gridTemplateColumns: ".3fr .7fr" }}
        >
          <div>
            <EditableImage link={image} setLink={setImage} />
          </div>
          <div className="grow">
            <label>Item name</label>
            <input
              type="text"
              value={name}
              onChange={(ev) => setName(ev.target.value)}
            ></input>
            <label>Description</label>
            <input
              type="text"
              value={description}
              onChange={(ev) => setDescription(ev.target.value)}
            ></input>
            <label>Base price</label>
            <input
              type="text"
              value={basePrice}
              onChange={(ev) => setBasePrice(ev.target.value)}
            ></input>
            <button type="submit">Save</button>
          </div>
        </div>
      </form>
    </section>
  );
}
