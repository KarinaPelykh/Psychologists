import clsx from "clsx";
import { NavLink } from "react-router-dom";

export const Navigation = () => {
  const routes = [
    { name: "Home", id: "7" },
    { path: "/psychologists", name: "Psychologists", id: "2" },
    { path: "/favorites", name: "Favorites", id: "1" },
  ];

  return (
    <ul className=" hidden  tablet:flex">
      {routes.map(({ path, name, id }) => (
        <li key={id} className="mr-[40px] relative">
          <NavLink
            className={({ isActive }) =>
              clsx(
                "",
                isActive
                  ? "after:bg-[#FC832C]  after:w-[8px] after:h-[8px] after:absolute after:rounded-[100%] after:block after:right-[50%] after:left-[50%]"
                  : ""
              )
            }
            to={path ? path : ""}
          >
            {name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
