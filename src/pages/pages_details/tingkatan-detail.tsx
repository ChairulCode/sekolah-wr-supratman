import { useParams } from "react-router-dom";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Announcement from "../../components/annoucment";
import Activity from "../../components/activity";

const TingkatanDetail = () => {
  const { level } = useParams();

  return (
    <div>
      <Header level={level} />
      <Announcement level={level} />
      <Activity level={level} />
      <Footer />
    </div>
  );
};

export default TingkatanDetail;
