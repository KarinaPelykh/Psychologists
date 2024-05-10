import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Layout } from "./components/Layout/Layout";

export const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="home" element={<h1>Home</h1>} />
      <Route path="psychologists" element={<h1>Psychologists</h1>} />
    </Route>
  )
);
