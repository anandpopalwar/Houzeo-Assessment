import "./Button.css";

const Button = ({
  firstChild,
  lastChild,
  name = "",
  onClick,
  className = "",
}) => {
  return (
    <div onClick={onClick} className={"Button " + className}>
      {firstChild && firstChild}
      {name}
      {lastChild && lastChild}
    </div>
  );
};

export default Button;

export const FilterButton = ({ name = "", classNamesList = [] }) => {
  return (
    <Button
      name={name}
      className={"filter_button  poppins-regular " + classNamesList.join(" ")}
    />
  );
};
