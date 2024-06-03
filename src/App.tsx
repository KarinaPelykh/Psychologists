import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Layout } from "./components/Header/Layout";
import { PsychologyPage } from "./page/Psychology";
import { PrivatePage } from "./hoc/PrivatePage";
import { HomePage } from "./page/HomePage";
import { Error } from "./components/Error";
import { Favorites } from "./components/Favorites/Favorites";

export const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="psychologists" element={<PsychologyPage />} />
      <Route
        path="favorites"
        element={
          <PrivatePage>
            <Favorites />
          </PrivatePage>
        }
      />
      <Route path="*" element={<Error />} />
    </Route>
  )
);
