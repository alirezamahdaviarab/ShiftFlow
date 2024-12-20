import * as React from "react";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { LoginPage } from "./login";


export default function Home() {
  return (
    <ClerkProvider>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <LoginPage />
      </div>
    </ClerkProvider>
  );
}
