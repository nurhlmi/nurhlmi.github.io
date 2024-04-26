import { useEffect, useState } from "react";
import { Card, CardContent, Link, Skeleton, Stack, Typography } from "@mui/joy";
import { CommitRounded } from "@mui/icons-material";

export default function Footer() {
	const [git, setGit] = useState();

	useEffect(() => {
		fetch("https://api.github.com/users/nurhlmi/events/public")
			.then((response) => response.json())
			.then((data) => {
				const value = data.filter((value) => value.repo.name === "nurhlmi/nurhlmi.github.io")[0];
				setGit(value);
			});
	}, []);

	return (
		<Card variant="soft" sx={{ mb: 10 }}>
			<CardContent>
				<Stack direction="row" alignItems="center" justifyContent="space-between">
					<Stack direction="row" alignItems="center" spacing={1}>
						<CommitRounded />
						<Typography level="body-xs">
							{git !== undefined && git.payload.commits?.length > 0 ? (
								git.payload.commits[0].sha.substring(0, 7)
							) : (
								<Skeleton />
							)}
						</Typography>
					</Stack>
					<Typography level="body-xs">
						Handcrafted using{" "}
						<Link href="https://mui.com/joy-ui/getting-started/" target="_blank" rel="noreferrer">
							Joy UI
						</Link>
					</Typography>
				</Stack>
			</CardContent>
		</Card>
	);
}
