import Grilla from "../components/Grilla";
import UpdateUser from "../components/UpdateUser";
import UserProfile from "../components/UserProfile";

const Dashboard = () => {
  return (
    <div style={{ color: "#909090" }}>
      <Grilla />
      <div>
        <UserProfile />
        <UpdateUser />
      </div>
    </div>
  );
};

export default Dashboard;
