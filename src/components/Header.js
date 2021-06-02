//syntax: rafce
import PropTypes from "prop-types";
import Button from "./Button";
const Header = ({ title }) => {
  const onClick = (e) => {
    console.log(e);
  };
  return (
    <header className="header">
      <h1> {title} </h1>
      <Button color="green" text="add" onClick={onClick} />
    </header>
  );
};

//CSS in JS
// const headingStyle = {
//     color:'red',
//     backgroundColor: 'black',
// }

//Catch error, restrict the type of props
Header.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Header;


//o ben kia parameter la <Header title="hello"/>
//in order to use the parameter: {props.title}
