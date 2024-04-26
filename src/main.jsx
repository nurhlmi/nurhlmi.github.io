import React from "react";
import ReactDOM from "react-dom/client";
import { CssVarsProvider } from "@mui/joy";
import App from "./App.jsx";
// import "@fontsource/inter";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<CssVarsProvider>
			<App />
		</CssVarsProvider>
	</React.StrictMode>
);
