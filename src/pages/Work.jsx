import { Card, CardContent, Grid, Link, Typography } from "@mui/joy";

export default function Work() {
	return (
		<div>
			<Typography level="h3" mb={2}>
				Selected work
			</Typography>
			<Card variant="soft">
				<CardContent>
					<Grid container alignItems="center">
						<Grid xs={12} md={6}>
							<img src="/images/riyadhoh.png" alt="Riyadhoh App" loading="lazy" width="100%" />
						</Grid>
						<Grid xs={12} md={6}>
							<Typography level="h2" gutterBottom>
								Riyadhoh App
							</Typography>
							<Typography level="body-sm" mb={2}>
								This is a Muslim application with many useful features that will help you evaluate your daily
								worship. Not only that, with the Riyadhoh application, you can also increase your productivity
								and capacity, broaden your knowledge with Islamic content, add friends in the Islamic community,
								and there are many other benefits that you can get!
							</Typography>
							<Typography
								level="body-sm"
								color="primary"
								component={Link}
								href="https://riyadhoh.vercel.app/home"
								target="_blank"
								rel="noreferrer"
							>
								Launch demo
							</Typography>
						</Grid>
					</Grid>
				</CardContent>
			</Card>
		</div>
	);
}
