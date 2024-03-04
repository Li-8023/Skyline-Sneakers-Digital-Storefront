"use client";
import Image from "next/image";
import { useState } from "react";
export default function RegisterPage() {
  //creates a state variable named "email" and a function to
  //update this state variable, named "setEmail" is the function
  //we call when we want to update the state variable
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleFormSubmit(ev) {
    ev.preventDefault();
    fetch("/api/register", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    }).then(response => {
      if(!response.ok){
        throw new Error('Failed to upload data to server');
      }
      return response.json();
    })
    .then(data =>{
      console.log('Data uploaded successfully:', data);
    })
    .catch(err =>{
      console.error('Failed to upload data to server', err);
    });
  }
  return (
    <section className="mt-4">
      <h1 className="text-center text-primary text-4xl mb-4">Register</h1>
      <form className="block max-w-xs mx-auto" onSubmit={handleFormSubmit}>
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(ev) => setEmail(ev.target.value)}
        ></input>
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
        ></input>
        <button type="submit">Register</button>
        <div className="my-4 text-center text-gray-500">
          or login with provider
        </div>
        <button className="flex gap-4 justify-center">
          <Image src={"/google.png"} alt={""} width={24} height={24} />
          Login with Google
        </button>
      </form>
    </section>
  );
}
