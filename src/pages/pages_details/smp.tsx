import Activity from "../../components/activity";
import Announcement from "../../components/annoucment";
import Footer from "../../components/footer";
import Header from "../../components/header";
import NavbarDetail from "../../components/navbar-detail/NavbarDetail";

const Smp = () => {
  return (
    <div>
      <>
        <NavbarDetail />
        <Header />
        <Announcement />
        <Activity />
        <Footer />
      </>
    </div>
  );
};

export default Smp;
