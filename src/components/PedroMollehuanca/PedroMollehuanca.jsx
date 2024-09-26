import PropTypes from "prop-types";
import { useState } from "react";
import Child from "./components/Child";

const PedroMollehuanca = ({ nombre, anios, rol, trabajo, pais }) => {
  const [expLaboral, setExpLaboral] = useState(1);
  const [flagWork, setFlagWork] = useState(true);
  const [auth, setAuth] = useState(false);
  const [hobbies, setHobbies] = useState(false);

  const hobbiesList = ["futbol", "natacion", "cine"];
  const sumarAge = (age) => {
    return age + 10;
  };

  const onClickMe = () => {
    setExpLaboral(expLaboral + 1);
    console.log("click me");
  };

  const changeFlag = () => {
    setFlagWork(!flagWork);
  };

  const initSession = () => {
    setAuth(true);
  };

  const flagHobbies = () => {
    setHobbies(!hobbies);
  };

  if (auth === false) {
    return <button onClick={initSession}>Iniciar Sesion</button>;
  }

  return (
    <article>
      <h2>{nombre}</h2>
      <p>{expLaboral}</p>
      <hr />
      <p>{rol}</p>
      <p>{sumarAge(anios)}</p>
      <p>{pais}</p>
      <p>{trabajo ? "Empleado" : "Desempleado"}</p>
      <hr />
      <div style={{ display: "flex" }}>
        <button type="button" onClick={onClickMe}>
          Click me
        </button>
        <Child setActualizador={setExpLaboral} />
      </div>
      <hr />
      <button type="button" onClick={changeFlag}>
        FlagWork
      </button>
      {flagWork ? <p>Trabajando</p> : <p>Desempleado</p>}
      <input type="checkbox" id="hob" onChange={flagHobbies} />
      <label htmlFor="hob">Tengo Hobbies</label>
      {hobbies && (
        <ul>
          {hobbiesList.map((hobbie, index) => (
            <li key={index}>{hobbie}</li>
          ))}
        </ul>
      )}
    </article>
  );
};

PedroMollehuanca.propTypes = {
  nombre: PropTypes.string.isRequired,
  anios: PropTypes.number.isRequired,
  rol: PropTypes.string.isRequired,
  trabajo: PropTypes.string.isRequired,
  pais: PropTypes.string,
};

// PedroMollehuanca.defaultProps = {
//   pais: "Colombia",
// };

export default PedroMollehuanca;
