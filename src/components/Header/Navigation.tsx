import clsx from "clsx";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { userSelector } from "../../redux/Auth/AuthSelector";

type Prop = {
  className?: string;
};
export const Navigation = ({ className }: Prop) => {
  const routes = [
    { name: "Home", id: "7" },
    { path: "/psychologists", name: "Psychologists", id: "2" },
    { path: "/favorites", name: "Favorites", id: "1" },
  ];

  const loggedInUser = useSelector(userSelector);
  const isLoggedIn = loggedInUser && loggedInUser.name !== "";
  const visibleRoutes = isLoggedIn ? routes : routes.slice(0, 2);
  return (
    <ul className={clsx(className, "hidden tablet:flex")}>
      {visibleRoutes.map(({ path, name, id }) => (
        <li key={id} className="mr-[40px] relative">
          <NavLink
            className={({ isActive }) =>
              clsx(
                "",
                isLoggedIn && isActive
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
