import "leaflet/dist/leaflet.css";
import "./Layout.scss";
import "../StylingSheets/Master.scss";
import "../StylingSheets/Fonts.css";
import "../StylingSheets/Animation.scss";
import Body from "../layout/MainBody/Body";
import Navbar from "./Navbar/Navbar";

const Layout = () => {
  return (
    <div className="layout_container">
      <Navbar />
      <Body />
    </div>
  );
};

export default Layout;
