import React, { useEffect, useRef } from "react";
import { HeartIcon } from "../../helpers/Icons";
import "./LikeController.scss";

const LikeController = ({ value, onClick, id }) => {
  const likeRef = useRef(null);

  return (
    <div className="like_controller">
      <HeartIcon
        fill={value && "red"}
        onClick={onClick}
        ref={likeRef}
        id={id}
      />
    </div>
  );
};

export default React.memo(LikeController);
