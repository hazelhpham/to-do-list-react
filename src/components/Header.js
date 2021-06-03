//syntax: rafce
import PropTypes from "prop-types";
import Button from "./Button";
const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className="header">
      <h1> {title} </h1>
      <Button
        color={showAdd ? "red" : "green"}
        text={showAdd ? "Close" : "Add" }

        onClick={onAdd}
      />
    </header>
  );
};



//Catch error, restrict the type of props
Header.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Header;


