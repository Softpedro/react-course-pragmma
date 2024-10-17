import { useContext, useState } from "react";
import { UserContext } from "../../UserContext";

const UpdateUser = () => {
  const { updateUser } = useContext(UserContext);
  const [newName, setNewName] = useState("");

  const handleUpdate = () => {
    updateUser(newName);
  };
  return (
    <div>
      <h2>Actualizar Usuario</h2>
      <input
        type="text"
        placeholder="Nuevo Nombre"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
      />
      <button onClick={handleUpdate}>Actualizar</button>
    </div>
  );
};

export default UpdateUser;
