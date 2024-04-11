"use client";

import React from "react";
import { signOut, useSession } from "next-auth/react";

export default function UserInfo() {
  const { data: session } = useSession();

  return (
    <div className="grid place-items-center h-screen">
      <div className="shadow-lg p-5 rounded-lg border-4 border-[#ac4dff] flex flex-col gap-2 my-6">
        <div className="text-xl">
          Name: <span className="font-bold">{session?.user?.name}</span>
        </div>
        <div className="text-xl">
          Email: <span className="font-bold">{session?.user?.email}</span>
        </div>
        <button
          onClick={() => signOut()}
          className="bg-gradient-to-r from-[#A74AFF] to-[#3F1BD6] rounded-md text-white font-bold cursor-pointer px-6 py-2"
        >
          Log Out
        </button>
      </div>
    </div>
  );
}
