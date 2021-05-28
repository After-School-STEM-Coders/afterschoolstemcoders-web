import { useRouter } from "next/router";

export const Header = () => {
  const router = useRouter();

  const handleClick = async () => {
    await router.push("/example2");
  };
  return (
    <div>
      <div className="text-center">Example 1</div>
      <button onClick={handleClick}>click here to see example2</button>
    </div>
  );
};
