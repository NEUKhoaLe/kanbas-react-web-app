import * as client from "./client";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { setUser } from "./UsersReducer";
import { useDispatch, useSelector } from "react-redux";
import "./index.css";
import { KanbasState } from "../Kanbas/store";
export default function Profile() {
  const [profile, setProfile] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    dob: "",
    email: "",
    role: "USER",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const fetchProfile = async () => {
    const account = await client.profile();
    setProfile(account);
  };

  const { user } = useSelector((state: KanbasState) => state.usersReducer);

  useEffect(() => {
    console.log(user);
    if (user) {
      fetchProfile();
    }
  }, [user]);

  const save = async () => {
    await client.updateUser(profile);
  };

  const signout = async () => {
    dispatch(setUser(null));
    await client.signout();
    navigate("/Kanbas/Account/Signin");
  };

  const allUsers = async () => {
    navigate("/Kanbas/Account/Admin/Users");
  };

  return (
    <div className={"profile-parent"}>
      <h1>Profile</h1>
      {profile && (
        <div className={"profile-body"}>
          <input
            value={profile.username}
            onChange={(e) =>
              setProfile({ ...profile, username: e.target.value })
            }
          />
          <input
            value={profile.password}
            onChange={(e) =>
              setProfile({ ...profile, password: e.target.value })
            }
          />
          <input
            value={profile.firstName}
            onChange={(e) =>
              setProfile({ ...profile, firstName: e.target.value })
            }
          />
          <input
            value={profile.lastName}
            onChange={(e) =>
              setProfile({ ...profile, lastName: e.target.value })
            }
          />
          <input
            value={profile.dob}
            type="date"
            onChange={(e) => setProfile({ ...profile, dob: e.target.value })}
          />
          <input
            value={profile.email}
            onChange={(e) => setProfile({ ...profile, email: e.target.value })}
          />
          <select
            onChange={(e) => setProfile({ ...profile, role: e.target.value })}
          >
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </select>

          <button onClick={save}>Save</button>
          <button onClick={signout}>Sign out</button>
          <button onClick={allUsers}>All Users</button>
        </div>
      )}
    </div>
  );
}
