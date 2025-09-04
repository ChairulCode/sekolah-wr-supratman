import Announcement from "../../components/annoucment";
import Header from "../../components/header";
import Navbar from "../../components/navbar";
import Welcome from "../../components/welcome";
import Activity from "../../components/activity/index";
import Footer from "../../components/footer";

const HomeScreen = () => {
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
