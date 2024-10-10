import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div style={{ border: "1px solid #0f0f0f", color: "#909090" }}>
      <button onClick={() => navigate("/dashboard")}>Iniciar Sesion</button>
      <Link to="/dashboard" style={{ color: "#909090" }}>
        redireccion
      </Link>
    </div>
  );
};

export default Login;
