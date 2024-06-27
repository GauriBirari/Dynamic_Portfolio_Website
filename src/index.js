import { createRoot } from "react-dom/client";
import App from "./App";
// import "./App.css"
import "./index.css";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle"

const root = createRoot(document.querySelector("#root"));

root.render(<App />);
