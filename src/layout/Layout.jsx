import MainBody from "./MainBody/Body";
import Navbar from "./Navbar/Navbar";
import "leaflet/dist/leaflet.css";
import "./Layout.scss";
import "../StylingSheets/Master.scss";
import "../StylingSheets/Fonts.css";
import "../StylingSheets/Animation.scss";

const Layout = () => {
  return (
    <div className="layout_container">
      <Navbar />
      <MainBody />
    </div>
  );
};

export default Layout;
