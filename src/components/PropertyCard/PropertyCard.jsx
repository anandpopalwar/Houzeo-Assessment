import "./PropertyCard.scss";
import {
  EyeIcon,
  HeartIcon,
  SliderButtonIcon,
  SliderIcon,
} from "../../helpers/Icons";
import LikeController from "../LikeController/LikeController";

const PropertyCard = ({
  statusText,
  PropUrl,
  isSaved,
  onSaveClick,
  views,
  price,
  meta,
  addressLine,
  addressSubLine,
  listingSource,
  id,
}) => {
  return (
    <div className="property_card">
      <div className="upper_body">
        <div className="extra_content">
          <div className="top_row">
            <div className="status_type radius_xl poppins-medium">
              {statusText}
            </div>

            {/* <HeartIcon fill={isSaved && "red"} onClick={onSaveClick} /> */}
            <LikeController
              value={isSaved}
              onClick={onSaveClick}
              id={id + "like_icon"}
            />
          </div>
          <div className="bottom_row">
            <SliderIcon />
          </div>

          <SliderButtonIcon className="sliderbuttonicon" />
        </div>
        <img src={PropUrl} />
      </div>

      <div className="lower_body">
        <div className="status_div">
          <div className="status_type radius_xl poppins-regular">
            <div className="badge radius_xl" />
            {statusText}
          </div>

          <div className="status_type views radius_xl poppins-regular">
            <EyeIcon />
            {views}
          </div>
        </div>

        <div className="prize_n_meta">
          <div className="prize poppins-bold">{price}</div>

          <div className="meta_content">
            {meta.map((item, index) => (
              <div className="meta" key={index}>
                {item.value}
                <span className="meta_subtitle poppins-regular">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="address_div">
          <div className="main poppins-medium">
            {addressLine},
            <span className="subcontent poppins-regular">{addressSubLine}</span>
          </div>

          <div className="remaining poppins-regular">{listingSource}</div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
