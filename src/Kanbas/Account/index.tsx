import { Outlet } from "react-router-dom";
import "./index.css";
export default function Account() {
  return (
    <div className="account-body">
      <Outlet />
    </div>
  );
}
