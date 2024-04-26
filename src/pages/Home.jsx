import { Container, Grid, Stack } from "@mui/joy";
import Profile from "./Profile";
import Experienced from "./Experienced";
import Tools from "./Tools";
import Work from "./Work";
import Footer from "./Footer";

export default function Home() {
	return (
		<Container>
			<Grid container justifyContent="center">
				<Grid xs sm={8}>
					<Stack spacing={6} my={3}>
						<Profile />
						<Experienced />
						<Tools />
						<Work />
					</Stack>
					<Footer />
				</Grid>
			</Grid>
		</Container>
	);
}
