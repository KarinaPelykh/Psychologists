import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Layout } from "./components/Header/Layout";
import { PsychologyPage } from "./page/Psychology";
import { PrivatePage } from "./hoc/PrivatePage";
import { Favorite } from "./page/Favorite";
import { HomePage } from "./page/HomePage";
import { Error } from "./components/Error";

export const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="psychologists" element={<PsychologyPage />} />
      <Route
        path="favorites"
        element={
          <PrivatePage>
            <Favorite />
          </PrivatePage>
        }
      />
      <Route path="*" element={<Error />} />
    </Route>
  )
);
