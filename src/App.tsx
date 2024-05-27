import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Layout } from "./components/Header/Layout";
import { Home } from "./components/Home/Home";
import { PsychologyPage } from "./page/Psychology";
import { PrivatePage } from "./hoc/PrivatePage";
import { Favorites } from "./components/favorites/Favorites";

export const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="psychologists" element={<PsychologyPage />} />
      <Route
        path="favorites"
        element={
          <PrivatePage>
            <Favorites />
          </PrivatePage>
        }
      />
      <Route path="*" element={<h1>NOT</h1>} />
    </Route>
  )
);
