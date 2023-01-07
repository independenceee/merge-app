import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";
import App from "./apps/App";
import GlobalStyles from "./components/GlobalStyles";
const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <Fragment>
        <GlobalStyles />
        <App />
    </Fragment>
);
