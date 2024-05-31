import { Nav } from "./Nav";

export const Header = () => {
  return (
    <header className="border">
      <div className="mx-[auto]  px-[24px] py-[20px] desktop:py-[24px] desktop:px-[128px]  ">
        <Nav />
      </div>
    </header>
  );
};
