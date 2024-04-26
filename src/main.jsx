import React from "react";
import ReactDOM from "react-dom/client";
import { CssVarsProvider } from "@mui/joy";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<CssVarsProvider defaultMode="dark">
			<App />
		</CssVarsProvider>
	</React.StrictMode>
);
