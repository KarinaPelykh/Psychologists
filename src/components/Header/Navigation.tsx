import { Link } from "react-router-dom";

export const Navigation = () => {
  const routes = [
    { path: "/home", name: "Home", id: "7" },
    { path: "/psychologists", name: "Psychologists", id: "2" },
    { path: "/favorites", name: "Favorites", id: "1" },
  ];

  return (
    <ul className="flex">
      {routes.map(({ path, name, id }) => (
        <li key={id} className="mr-[40px]">
          <Link to={path}>{name}</Link>
        </li>
      ))}
    </ul>
  );
};
