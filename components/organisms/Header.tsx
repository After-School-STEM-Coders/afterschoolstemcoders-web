import { useRouter } from "next/router";

export const Header = () => {
  const router = useRouter();

  const handleClick = async () => {
    await router.push("/example2");
  };
  return (
    <div>
      <div className="p-4 flex flex-row justify-betweend fixed text-white bg-gray-700 bg-opacity-80 w-full">
        <div className=" space-x-8 flex flex-row flex-wrap items-center w-full max-w-screen-xl justify-center">
          <div className="text-7xl">CSC</div>

          <div className="flex flex-1 items-center justify-end">
            <div className="space-x-16 flex flex-1 mr-8 font-semibold justify-center">
              <div className="cursor-pointer">Page</div>
              <div className="cursor-pointer">Page</div>
              <div className="cursor-pointer">Page</div>
              <div className="cursor-pointer">Page</div>
              <div className="cursor-pointer">Page</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
