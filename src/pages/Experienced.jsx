import { Card, CardContent, Grid, Typography } from "@mui/joy";

const items = ["CSS", "Bootstrap", "PHP", "JavaScript", "React", "Material UI", "Docker"];

export default function Experienced() {
	return (
		<div>
			<Typography level="h3" mb={2}>
				Experienced in
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
