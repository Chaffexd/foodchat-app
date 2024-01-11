import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <>
    <h1 className="mb-4 text-2xl">👇🏻 Were you looking to log in?</h1>
    <button
      className="bg-slate-400 w-20 h-10 rounded-md text-white hover:bg-slate-600"
      onClick={() => loginWithRedirect()}
    >
      Log In
    </button>
    </>
  );
};

export default LoginButton;
