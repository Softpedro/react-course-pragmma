import { useContext } from "react";
import { UserContext } from "../../UserContext";

const UserProfile = () => {
  const { user } = useContext(UserContext);
  return (
    <div>
      <h2>Perfil del usuario</h2>
      <p>Nombre: {user.name}</p>
    </div>
  );
};

export default UserProfile;
