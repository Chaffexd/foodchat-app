"use client";
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Image from "next/image";

const LogoutButton = () => {
  const { logout } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();

  return (
    <>
      <div className="mb-8">
        <Image
          src={user?.picture || ""}
          alt={`A photo of ${user?.name}`}
          width={100}
          height={100}
          className="rounded-full mb-4"
        />
        <h1 className="mb-1">Hello, {user?.name}! Welcome to your profile.</h1>
        <h2>{user?.email}</h2>
      </div>
      <button
        className="bg-slate-400 w-20 h-10 rounded-md text-white hover:bg-slate-600"
        onClick={() =>
          logout({ logoutParams: { returnTo: window.location.origin } })
        }
      >
        Log Out
      </button>
    </>
  );
};

export default LogoutButton;
