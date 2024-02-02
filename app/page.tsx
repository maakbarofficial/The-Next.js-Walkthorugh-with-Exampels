import React, { Suspense } from "react";
import TodosList from "./(users)/todos/TodosList";

const Home = () => {
  return (
    <div className="text-black">
      <Suspense
        fallback={
          <p className="text-red-500 font-bold">Loading The Todos.....</p>
        }
      >
        <div className="flex space-x-2">
          <TodosList />
        </div>
      </Suspense>

      <Suspense
        fallback={
          <p className="text-black-500 font-bold">
            Loading The Shopping Trolley.....
          </p>
        }
      >
        <div className="flex space-x-2">
          <TodosList />
        </div>
      </Suspense>
    </div>
  );
};

export default Home;
