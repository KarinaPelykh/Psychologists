import { Outlet } from "react-router-dom";
import { Header } from "./Header";
export const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <div className="mx-[auto] mobil:w-[300px]  tablet:w-[738px]  tablet:px-[15px]  desktop:w-[1280px]  desktop:px-[15px] ">
          <Outlet />
        </div>
      </main>
    </>
  );
};
