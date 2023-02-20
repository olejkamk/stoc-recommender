import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import './index.scss';
import { StockMarketProvider } from "./context/StockMarketContext";

const rootRef = document.getElementById("root");
const root = createRoot(rootRef);
root.render(
  <StockMarketProvider>
    <App />
  </StockMarketProvider>
);
