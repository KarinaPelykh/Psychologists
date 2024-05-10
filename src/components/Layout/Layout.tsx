import { Link } from "react-router-dom";

export const Layout = () => {
  const routes = [
    { path: "/home", name: "Home", id: "1" },
    { path: "/psychologists", name: "Psychologists", id: "2" },
  ];

  return (
    <ul>
      {routes.map(({ path, name, id }) => (
        <li key={id}>
          <Link to={path}>{name}</Link>
        </li>
      ))}
    </ul>
  );
};
