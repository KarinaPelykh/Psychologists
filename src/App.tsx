import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Layout } from "./components/Header/Layout";
import { Home } from "./components/Home/Home";

export const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="psychologists" element={<h1>Psychologists</h1>} />
      <Route path="favorites" element={<h1>Favorites</h1>} />
      <Route path="*" element={<h1>NOT FOUND</h1>} />
    </Route>
  )
);
