"use client";
import Image from "next/image";
import { resolve } from "path";
import Link from "next/link";
import { useEffect, useState } from "react";
import EditableImage from "@/components/Layout/EditableImage";
import { useProfile } from "../UseProfile";
import AddressInputs from "./AddressInputs";

export default function UserForm({ user, onSave }) {
  const [userName, setUserName] = useState(user?.name || "");
  const [image, setImage] = useState(user?.image || "");
  const [phone, setPhone] = useState(user?.phone || "");
  const [streetAddress, setStreetAddress] = useState(user?.streetAddress || "");
  const [postalCode, setPostalCode] = useState(user?.postalCode || "");
  const [city, setCity] = useState(user?.city || "");
  const [country, setCountry] = useState(user?.country || "");
  const [admin, setAdmin] = useState(user?.admin || false);

  const { data: loggedInUserData } = useProfile();

  function handleAddressChange(propName, value) {
    if (propName === "city") {
      setCity(value);
    }
    if (propName === "phone") {
      setPhone(value);
    }
    if (propName === "streetAddress") {
      setStreetAddress(value);
    }
    if(propName === 'country') {
      setCountry(value);
    }
    if(propName === 'postalCode'){
      setPostalCode(value);
    }
  }
  return (
    <div className="flex gap-4">
      <div>
        <div className="p-2 rounded-lg relative max-w-[120px]">
          <EditableImage link={image} setLink={setImage} />
        </div>
      </div>
      <form
        className="grow"
        onSubmit={(ev) =>
          onSave(ev, {
            admin,
            name: userName,
            image,
            phone,
            streetAddress,
            city,
            country,
            postalCode,
          })
        }
      >
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
          value={user.email}
          disabled={true}
          placeholder="email address"
        ></input>
        <AddressInputs
          addressProps={{ phone, streetAddress, postalCode, city, country }}
          setAddressProp={handleAddressChange}
        />
        {loggedInUserData.admin && (
          <div>
            <label
              className="p-2 inline-flex items-center mb-2 gap-2 block"
              htmlFor="adminCb"
            >
              <input
                id="adminCb"
                type="checkbox"
                className=""
                value={"1"}
                checked={admin}
                onClick={(ev) => setAdmin(ev.target.checked)}
              />
              <span>Admin</span>
            </label>
          </div>
        )}

        <button type="submit">Save</button>
      </form>
    </div>
  );
}
