import PropTypes from "prop-types";
import { useState } from "react";
import Child from "./components/Child";

const PedroMollehuanca = ({ nombre, anios, rol, trabajo, pais }) => {
  const [expLaboral, setExpLaboral] = useState(1);
  const [flagWork, setFlagWork] = useState(true);
  // const [auth, setAuth] = useState(false);
  const [hobbies, setHobbies] = useState(false);
  const hobbiesList = ["futbol", "natacion", "cine"];

  // useEffect(() => {
  //   console.log("componente montado y actualizado por auth");
  // }, [auth]);

  const sumarAge = (age) => {
    return age + 10;
  };

  const onClickMe = () => {
    setExpLaboral(expLaboral + 1);
  };

  const changeFlag = () => {
    setFlagWork(!flagWork);
  };

  const flagHobbies = () => {
    setHobbies(!hobbies);
  };

  return (
    <article>
      <h2>{nombre}</h2>
      <p>{expLaboral}</p>
      <hr />
      <p>{rol}</p>
      <p>{sumarAge(anios)}</p>
      <p>{pais}</p>
      <p>{trabajo ? "trabajando" : "no trabajo"}</p>
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
export default PedroMollehuanca;
