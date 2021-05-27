import "tailwindcss/tailwind.css";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default () => {
  const router = useRouter();
  useEffect(() => {
    // 'page' index is looked at first, but here we choose which page we want to send a user to.
    return router.push("/home"); // redirect to pages/home.js
  });
  return <div>you shouldn't see this</div>;
};
