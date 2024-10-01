import { useState } from "react";
import PedroMollehuanca from "../PedroMollehuanca";

const Grilla = () => {
  const [darkMode, setDarkMode] = useState(true);
  const onDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const returnBgColor = () => (darkMode ? "#08181c" : "#f0f0f0");
  const returnColor = () => (darkMode ? "#f0f0f0" : "#08181c");

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        color: returnBgColor(),
        backgroundColor: returnColor(),
      }}
    >
      <div>
        <input type="checkbox" id="darkMode" onChange={onDarkMode} />
        <label htmlFor="darkMode">Dark Mode</label>
      </div>
      <section id="sectionPedro">
        <PedroMollehuanca
          nombre={"Pedro"}
          rol={"Desarrollador"}
          anios={32}
          trabajo={"empleado"}
          pais={"Perú"}
        />
      </section>
    </div>
  );
};

export default Grilla;
