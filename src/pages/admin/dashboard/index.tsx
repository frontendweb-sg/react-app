import Input from "@/components/common/Input";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

/**
 * Dashbaord page
 * @returns
 */
const Dashboard = () => {
  return (
    <div>
      Dashbaord <Button variant="contained">Hello</Button>
      <Input placeholder="Hello world" />
      <Link to="/auth">Auth</Link>
    </div>
  );
};

export default Dashboard;
