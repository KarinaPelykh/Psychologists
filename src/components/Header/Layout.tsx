import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Suspense } from "react";
export const Layout = () => {
  return (
    <>
      <Header />
      <Suspense
        fallback={
          <h1 className="relative top-0 left-0 bg-teal-500 w-[100%] h-[100%]">
            Loading
          </h1>
        }
      >
        <Outlet />
      </Suspense>
    </>
  );
};
