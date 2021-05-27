import { useState } from "react";
import { useRouter } from "next/router";

// This is an example of a component. Components must be capitalized.
// Here I named this component 'Example1' which is also the name of the file (important).

export const Example1 = () => {
  const router = useRouter();

  const handleClick = async () => {
    await router.push("/example2");
  };
  return (
    // only a single element may be returned by a component
    // but there can be multiple elements nested instide.

    //parent element ( use // to comment outside of an element)
    <div>
      {/* nested element ( use {/* to comment inside of an element)  */}
      <div className="text-center">Example 1</div>
      <button onClick={handleClick}>click here to see example2</button>
    </div>
  );
};
