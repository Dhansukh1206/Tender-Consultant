"use client";

import { useSession, signIn } from "next-auth/react";
import { useEffect } from "react";

export default function Dashboard() {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") {
      signIn(); // redirects to sign in page
    }
  }, [status]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (!session) return null;

  return (
    <div>
      <h1>Welcome {session.user.name}</h1>
      <p>This is your Tender Consultant Dashboard</p>
    </div>
  );
}
