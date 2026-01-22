import React, { useRef, useState } from "react";
import Button from "../Button/Button";
import { DownIcon } from "../../helpers/Icons";
import "./Dropdown.scss";
import { HandleClickOutSide } from "../../helpers/customHooks";

const Dropdown = ({
  defaultOpen = false,
  value,
  children,
  onSelect,
  itemsList,
}) => {
  const ddRef = useRef();
  const [isOpen, setIsOpen] = useState(defaultOpen);

  HandleClickOutSide(ddRef, () => {
    setIsOpen((p) => false);
  });

  return (
    <div className="dropdown_container" ref={ddRef}>
      <Button
        name={value}
        className="dropdown__trigger filter_button poppins-regular radius_sm"
        lastChild={
          <DownIcon
            style={{
              transform: isOpen && "rotateX(180deg)",
            }}
          />
        }
        onClick={() => {
          setIsOpen((p) => !p);
        }}
      />

      {isOpen && (
        <div className="dropdown_list radius_md">
          {itemsList.map((item) => {
            return (
              <div className="dropdown_item">
                <Button
                  name={item}
                  className="poppins-regular filter_button"
                  onClick={() => {
                    setIsOpen((p) => !p);
                    onSelect(item);
                  }}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
