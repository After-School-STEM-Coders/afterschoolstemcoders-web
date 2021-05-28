import { Example2 } from "../components/Example2";

// This a page who's name is detirmined by the filename.
// This page can be reached by going to http://localhost:3000/example2

const Example2Page = () => {
  return (
    <div className="h-screen bg-gray-500 flex justify-center items-center">
      <Example2 />
    </div>
  );
};

export default Example2Page;
