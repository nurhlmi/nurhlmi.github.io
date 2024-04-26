import { useEffect, useState } from "react";
import { Button, CssBaseline, useColorScheme } from "@mui/joy";
import { DarkModeRounded, LightModeRounded } from "@mui/icons-material";
import Home from "./pages/Home";

function ModeToggle() {
	const { mode, setMode } = useColorScheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);
	if (!mounted) {
		return <Button variant="soft">Change Mode</Button>;
	}

	return (
		<Button
			size="lg"
			variant="soft"
			onClick={() => {
				setMode(mode === "light" ? "dark" : "light");
			}}
			sx={{ borderRadius: 10, p: 1.5, zIndex: 99, position: "fixed", bottom: 15, right: 15 }}
		>
			{mode === "light" ? <DarkModeRounded /> : <LightModeRounded />}
		</Button>
	);
}

export default function App() {
	return (
		<main>
			<ModeToggle />
			<CssBaseline />
			<Home />
		</main>
	);
}
