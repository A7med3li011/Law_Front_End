import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { ToastContainer } from "react-toastify";
import "./ui/fontAwesome";
import { Provider } from "react-redux";
import store from "./redux/store";

import { QueryClient, QueryClientProvider } from "react-query";
import "./i18n"; // import i18n config
import { StoringContextProvider } from "./context/StoringContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
const queryClient = new QueryClient();
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <StoringContextProvider>
          <App />
        </StoringContextProvider>
      </Provider>
    </QueryClientProvider>
    <ToastContainer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
