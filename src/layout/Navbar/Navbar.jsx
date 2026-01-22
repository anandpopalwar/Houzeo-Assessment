import "./Navbar.scss";
// import MainLogo from "../../assets/Logo.png";
import { DownIcon, MainLogo, MenuIcon, ProfileIcon } from "../../helpers/Icons";
import Button from "../../components/Button/Button";

const primaryNavigation = [
  {
    name: "Product",
    isDropDown: true,
  },
  {
    name: "How Houzeo Works",
    isDropDown: false,
  },
  {
    name: "Reviews",
    isDropDown: false,
  },
  {
    name: "Buy",
    isDropDown: true,
  },
  {
    name: "Sell",
    isDropDown: true,
  },
  {
    name: "Pricing",
    isDropDown: false,
  },
  {
    name: "Resources",
    isDropDown: true,
  },
  {
    name: "Sign In",
    isDropDown: false,
  },
];

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="hamburger_menu">
        <MenuIcon />
      </div>
      <div className="mainlogo">
        <MainLogo />
        {/* <img src={MainLogo} /> */}
      </div>

      <div className="primary_nav_container">
        {primaryNavigation.map((nav) => {
          return (
            <div
              className={`primary_nav_item poppins-regular ${!nav.isDropDown ? "weblink" : "droppanel"}`}
            >
              {nav.name}

              {nav.isDropDown && (
                <div className="dd_icon">
                  <DownIcon />
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div className="primary_cta_container">
        <div className="info_details">
          (844) 448-0110
          <br />
          <div className="info_details_timing">(9am to 6pm CST, Mon-Sat)</div>
        </div>
        <div className="primary_cta">
          <Button
            name={"Start Free Listing"}
            className="primary_btn poppins-medium"
          />

          <ProfileIcon className="profile_icon" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
