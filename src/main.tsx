import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import { routes } from "./App";

import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { monitorAuthState } from "./redux/Auth/Auth";
import { FavoriteProvider } from "./components/Context/Context";
import { ToastContainer } from "react-toastify";
monitorAuthState();
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ToastContainer autoClose={1000} />
        <FavoriteProvider>
          <RouterProvider router={routes} />
        </FavoriteProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
