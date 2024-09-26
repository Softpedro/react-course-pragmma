import PropTypes from "prop-types";

const Child = ({ setActualizador }) => {
  const onClickMe2 = () => {
    setActualizador((prevExpLaboral) => prevExpLaboral + 1);
  };
  return (
    <div id="child">
      <button type="button" onClick={onClickMe2}>
        Click me2
      </button>
    </div>
  );
};

Child.propTypes = {
  setActualizador: PropTypes.func.isRequired,
};

export default Child;
