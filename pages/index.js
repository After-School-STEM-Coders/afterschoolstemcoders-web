import Head from "next/head";
import "tailwindcss/tailwind.css";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function foo() {
  const router = useRouter();
  useEffect(() => {
    return router.push("/home");
  });
  return <div>you shouldn't see this</div>;
}
