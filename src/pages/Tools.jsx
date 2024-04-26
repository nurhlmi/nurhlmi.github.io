import { Card, CardContent, Grid, Typography } from "@mui/joy";

const items = [
	"Chrome",
	"DBeaver",
	"Docker Desktop",
	"GitHub",
	"Jira",
	"Oh My Zsh",
	"Postman",
	"Termius",
	"Visual Studio Code",
	"Vercel",
	"Vite",
	"Yarn",
];

export default function Tools() {
	return (
		<div>
			<Typography level="h3" mb={2}>
				Applications & Tools
			</Typography>
			<Grid container spacing={1}>
				{items.map((value, index) => (
					<Grid xs={6} md={4} key={index}>
						<Card variant="soft">
							<CardContent>
								<Typography level="title-md">{value}</Typography>
							</CardContent>
						</Card>
					</Grid>
				))}
			</Grid>
		</div>
	);
}
