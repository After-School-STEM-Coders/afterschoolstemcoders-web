import { useRouter } from "next/router";
import { useEffect } from "react";

export default function IndexPage() {
  const router = useRouter();

  useEffect(() => {
    const run = async () => {
      await router.push("/home");
    };
    run();
  });

  return <div className="h-screen"></div>;
}
