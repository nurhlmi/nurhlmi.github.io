import { Avatar, IconButton, Link, Stack, Tooltip, Typography } from "@mui/joy";
import { GitHub, Instagram, LinkedIn } from "@mui/icons-material";

export default function Profile() {
	return (
		<Stack spacing={3}>
			<Avatar alt="Nur Hilmi" src="/favicon/android-chrome-512x512.png" sx={{ width: 150, height: 150 }} />
			<Stack>
				<Typography level="h2" gutterBottom>
					Nur Hilmi
				</Typography>
				<Typography level="body-sm">
					Currently, I work as a Frontend at the{" "}
					<Link href="https://kemenkopukm.go.id" target="_blank" rel="noreferrer">
						Kementerian Koperasi dan UKM
					</Link>
					. I have more than five (5) years of experience in this role. I am capable of working effectively both in
					teams and independently, with strong communication skills. Additionally, I am proficient in working
					according to established project management practices.
				</Typography>
			</Stack>
			<Stack direction="row" spacing={1}>
				<Tooltip title="github.com/nurhlmi" arrow>
					<IconButton component={Link} href="https://github.com/nurhlmi" target="_blank" rel="noreferrer">
						<GitHub />
					</IconButton>
				</Tooltip>
				<Tooltip title="linkedin.com/in/nurhlmi" arrow>
					<IconButton component={Link} href="https://linkedin.com/in/nurhlmi" target="_blank" rel="noreferrer">
						<LinkedIn />
					</IconButton>
				</Tooltip>
				<Tooltip title="instagram.com/nurhlmi" arrow>
					<IconButton component={Link} href="https://instagram.com/nurhlmi" target="_blank" rel="noreferrer">
						<Instagram />
					</IconButton>
				</Tooltip>
			</Stack>
		</Stack>
	);
}
