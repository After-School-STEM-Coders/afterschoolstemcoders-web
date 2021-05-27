import { Example1 } from "../components/Example1";

const Home = () => {
  return (
    // all styling for an element is detirmined by className using tailwind
    <div className="h-screen bg-gray-500 flex justify-center items-center">
      {/* here, the contents of component 'Example1' is rendered 
      (cmd+click on 'Example1' to go to it) */}
      <Example1 />
    </div>
  );
};

export default Home;
