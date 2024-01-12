"use client";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../components/Login/Login";
import LogoutButton from "../components/Login/Logout";

const LoginPage = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  return (
    <div className="px-40 pt-20">
      <title>{"Foodchat"}</title>
      <meta name="description" content={"Profile page"}></meta>
      {isAuthenticated ? <LogoutButton /> : <LoginButton />}
    </div>
  );
};

export default LoginPage;
