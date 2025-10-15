import Announcement from "../../components/annoucment";
import Header from "../../components/header";
import Navbar from "../../components/navbar";
import Welcome from "../../components/welcome";
import Activity from "../../components/activity/index";
import Footer from "../../components/footer";
import { useEffect } from "react";
import { getRequest } from "../../utils/api-call";

const HomeScreen = () => {
	// CONTOH CARA PAKAI API-CALL
	useEffect(() => {
		const getData = async () => {
			const data = await getRequest("berita");
			console.log(data);
		};
		getData();
	}, []);
	return (
		<div>
			<Navbar />
			<Header />
			<Welcome />
			<Announcement />
			<Activity />
			<Footer />
		</div>
	);
};

export default HomeScreen;
