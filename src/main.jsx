import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import PubsubContextProvider from "./states/pubsubContext";
import PubsubActionsContextProvider from "./states/pubsubActionsContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PubsubContextProvider>
      <PubsubActionsContextProvider>
        <App />
      </PubsubActionsContextProvider>
    </PubsubContextProvider>
  </React.StrictMode>
);
