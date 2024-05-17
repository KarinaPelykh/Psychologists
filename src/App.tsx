import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Layout } from "./components/Header/Layout";
import { Home } from "./components/Home/Home";
import { PsychologyPage } from "./page/Psychology";

export const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="psychologists" element={<PsychologyPage />} />
      <Route path="favorites" element={<h1>Favorites</h1>} />
      <Route path="*" element={<h1>NOT</h1>} />
    </Route>
  )
);
