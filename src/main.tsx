import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

console.log("Mounting app...");

const root = document.getElementById("root");
if (!root) {
  console.error("Root element not found");
} else {
  try {
    createRoot(root).render(<App />);
  } catch (error) {
    console.error("Error mounting app:", error);
    root.innerHTML = "<div>Error mounting app. Check console.</div>";
  }
}
