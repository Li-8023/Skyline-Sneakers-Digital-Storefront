"use client";
import { useSession } from "next-auth/react";
import { redirect } from "next/dist/server/api-utils";
import Image from "next/image";
import { resolve } from "path";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Link from "next/link";
import UserTabs from "@/components/Layout/UserTabs";
import EditableImage from "@/components/Layout/EditableImage";

export default function ProfilePage() {
  const session = useSession();
  const { status } = session;
  const [userName, setUserName] = useState("");
  const [image, setImage] = useState("");
  const [phone, setPhone] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [profileFetched, setProfileFetched] = useState(false);
  useEffect(() => {
    if (status === "authenticated") {
      setUserName(session.data.user.name);
      setImage(session.data.user.image);
      fetch("/api/profile").then(response => {
        response.json().then((data) => {
          setPhone(data.phone);
          setStreetAddress(data.streetAddress);
          setPostalCode(data.postalCode);
          setCity(data.city);
          setCountry(data.country);
          setIsAdmin(data.admin);
          setProfileFetched(true);
        })
      });
    }
  }, [session, status]);

  async function handleProfileInfoUpdate(ev) {
    ev.preventDefault();

    const savingPromise = new Promise(async (resolve, reject) => {
      const response = await fetch("/api/profile", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: userName,
          image,
          streetAddress,
          phone,
          postalCode,
          city,
          country,
        }),
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
        <div className="flex gap-4">
          <div>
            <div className="p-2 rounded-lg relative max-w-[120px]">
              <EditableImage link={image} setLink = {setImage}/>
            </div>
          </div>
          <form className="grow" onSubmit={handleProfileInfoUpdate}>
            <label>First and last nem</label>
            <input
              type="text"
              placeholder="First and last name"
              value={userName}
              onChange={(ev) => setUserName(ev.target.value)}
            />
            <label>Email</label>
            <input
              type="email"
              value={session.data.user.email}
              disabled={true}
              placeholder="email address"
            ></input>
            <label>Phone</label>
            <input
              type="tel"
              placeholder="Phone number"
              value={phone}
              onChange={(ev) => setPhone(ev.target.value)}
            ></input>
            <label>Street address</label>
            <input
              type="text"
              placeholder="Street address"
              value={streetAddress}
              onChange={(ev) => setStreetAddress(ev.target.value)}
            ></input>
            <div className="flex gap-2">
              <div>
                <label>Postal code</label>
                <input
                  type="text"
                  placeholder="Postal code"
                  value={postalCode}
                  onChange={(ev) => setPostalCode(ev.target.value)}
                ></input>
              </div>
              <div>
                <label>City</label>
                <input
                  type="text"
                  placeholder="City"
                  value={city}
                  onChange={(ev) => setCity(ev.target.value)}
                ></input>
              </div>
            </div>
            <label>Country</label>
            <input
              type="text"
              placeholder="Country"
              value={country}
              onChange={(ev) => setCountry(ev.target.value)}
            ></input>
            <button type="submit">Save</button>
          </form>
        </div>
      </div>
    </section>
  );
}
