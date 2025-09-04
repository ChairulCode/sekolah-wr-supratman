import Announcement from "../../components/annoucment";
import Header from "../../components/header";
import Navbar from "../../components/navbar";
import Welcome from "../../components/welcome";
import Activity from "../../components/activity/index";

const HomeScreen = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Welcome />
      <Announcement />
      <Activity />
    </div>
  );
};

export default HomeScreen;
