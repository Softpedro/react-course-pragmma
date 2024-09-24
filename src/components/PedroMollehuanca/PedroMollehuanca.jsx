import { developer } from "./constans";

const PedroMollehuanca = () => {
  const sumarAge = (age) => {
    return age + 10;
  };
  const {
    name = "Pedro Mollehuanca",
    age,
    country,
    role,
    work,
    isAdmin,
  } = developer;

  let content;

  if (isAdmin) {
    content = <p>Es administrador</p>;
  }

  return (
    <article>
      <h2>{name}</h2>
      <hr />
      <p>{role}</p>
      <p>{sumarAge(age)}</p>
      <p>{country}</p>
      <p>{work ? "Empleado" : "Desempleado"}</p>
      {/* {isAdmin && <p>Es administrador</p>} */}
      {content}
    </article>
  );
};

export default PedroMollehuanca;
