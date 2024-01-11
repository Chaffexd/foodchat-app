"use client";
import { Auth0Provider } from "@auth0/auth0-react";
import { ReactNode } from "react";

type AuthProps = {
    children: ReactNode;
}

const redirectUri = typeof window !== 'undefined' ? window.location.origin : '';

const AuthProvider = ({ children }: AuthProps) => {
  return (
    <Auth0Provider
      domain={process.env.NEXT_PUBLIC_DOMAIN ?? ""}
      clientId={process.env.NEXT_PUBLIC_CLIENTID ?? ""}
      authorizationParams={{
        redirect_uri: redirectUri,
      }}
    >
      {children}
    </Auth0Provider>
  );
};

export default AuthProvider;
