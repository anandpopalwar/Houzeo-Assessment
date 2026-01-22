import React, { useState } from "react";
import Button from "../../components/Button/Button";
import InputBox from "../../components/InputBox/InputBox";
import {
  CloseIcon,
  DownIcon,
  EyeIcon,
  FiltersIcon,
  HeartIcon,
  ListIcon,
  MapIcon,
  PenIcon,
  SearchIcon,
} from "../../helpers/Icons";
import "./Body.scss";
import MapView from "../../components/Map/Map";
import PropertyCard from "../../components/PropertyCard/PropertyCard";
import { propertyList } from "../../components/PropertyCard/Properties";
import ModalComponent from "../../components/Modal/ModalComponent";
import Dropdown from "../../components/Dropdown/Dropdown";
const MainBody = () => {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [isMapOpen, setisMapOpen] = useState(false);
  const [Properties, setProperties] = useState({ ...propertyList });
  const [search, setSearch] = useState("Austin ,TX");

  const ChangeSavedStatus = (id) => {
    setProperties((p) => ({
      ...p,
      [id]: {
        ...p[id],
        isSaved: !p[id].isSaved,
      },
    }));

    let item = document.getElementById(id + "like_icon");
    if (!Properties[id].isSaved) {
      console.log("addd");
      item.classList.add("pulse");
    } else {
      item.classList.remove("pulse");
    }
    console.log(id, item);
  };
  return (
    <div className="main_content_body">
      <div className="filters_bar">
        <div className="large_view">
          <InputBox
            placeHolder={"Search property, area"}
            type="search"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            lastChild={<SearchIcon height="24px" width="24px" />}
          />

          <Dropdown
            value={"For Sale"}
            onSelect={(item) => {
              console.log(item);
            }}
            itemsList={["For Sale", "Sold"]}
          />

          <Dropdown
            value={"Price"}
            onSelect={(item) => {
              console.log(item);
            }}
            itemsList={["Lowest", "$10000", "$20000", "$30000"]}
          />

          <Dropdown
            value={"Beds & Baths"}
            onSelect={(item) => {
              console.log(item);
            }}
            itemsList={["Single", "Double", "+3", "+4", "+5"]}
          />

          <Dropdown
            value={"Property Type"}
            itemsList={[
              "Residential",
              "Commercial",
              "Industrial",
              "Agricultural",
              "Mixed-Use",
              "Land/Raw Land",
              "Special Purpose",
            ]}
            onSelect={(item) => {
              console.log(item);
            }}
          />

          <Button
            name={"Filters"}
            className="filter_button poppins-regular radius_sm"
            firstChild={<FiltersIcon />}
          />
          <Button
            name={"Saved"}
            className="filter_button poppins-regular radius_xl"
            firstChild={<PenIcon />}
          />
        </div>
        <div className="small_view">
          <div className="top_row">
            <InputBox
              placeHolder={"Search property, area"}
              type="search"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              lastChild={<SearchIcon height="24px" width="24px" />}
            />

            <Button
              className="filter_button poppins-regular radius_xxl"
              firstChild={<FiltersIcon />}
            />
          </div>
          <div className="bottom_row">
            <Dropdown
              value={"For Sale"}
              onSelect={(item) => {
                console.log(item);
              }}
              itemsList={["For Sale", "Sold"]}
            />

            <Dropdown
              value={"Price"}
              onSelect={(item) => {
                console.log(item);
              }}
              itemsList={["Lowest", "$10000", "$20000", "$30000"]}
            />
            <Button
              name={"Save Search"}
              className="filter_button  poppins-regular radius_xl selected_button"
              // lastChild={<DownIcon />}
            />
          </div>
        </div>
      </div>
      <div className="content_body">
        <div className="content_body_left">
          <MapView />
        </div>
        <div className="content_body_right">
          <div className="list_header">
            <div className="title poppins-semibold">
              <h3>Austin, TX real estate & homes for sale</h3>
            </div>
            <div className="subtitle poppins-medium">
              <span className="subtitle_muted_text">2,010 Homes</span>
              <div className="right">
                <span className="subtitle_muted_text">Sort by:</span>

                <Dropdown
                  value={"New Listing"}
                  onSelect={(item) => {
                    console.log(item);
                  }}
                  itemsList={[
                    "Homes for You",
                    "Price (High to Low)",
                    "Price (Low to High)",
                    "New Listing",
                  ]}
                />
              </div>
            </div>
          </div>
          <div className="list_content">
            {Object.keys(Properties).map((property) => (
              <PropertyCard
                key={Properties[property].id}
                {...Properties[property]}
                onSaveClick={() => ChangeSavedStatus(property)}
              />
            ))}
          </div>
        </div>
      </div>

      <Button
        name={!isMapOpen ? "Map" : "List"}
        className="close_btn  poppins-regular radius_xl"
        lastChild={!isMapOpen ? <MapIcon /> : <ListIcon fill="#ffff" />}
        onClick={() => {
          setisMapOpen((p) => !p);
        }}
      />

      {isMapOpen && (
        <ModalComponent
          onClose={() => {
            setisMapOpen((p) => !p);
          }}
        >
          <div className="map_container">
            <MapView />
          </div>
        </ModalComponent>
      )}
    </div>
  );
};

export default MainBody;
