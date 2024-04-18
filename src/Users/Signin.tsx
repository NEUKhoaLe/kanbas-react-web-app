import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "./client";
import * as client from "./client";
import "../Kanbas/Account/index.css";
import { setUser } from "./UsersReducer";
import { useDispatch, useSelector } from "react-redux";
import { KanbasState } from "../Kanbas/store";
export default function Signin() {
  const [credentials, setCredentials] = useState<User>({
    _id: "",
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    role: "USER",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state: KanbasState) => state.usersReducer);

  useEffect(() => {
    if (user) {
      navigate("/Kanbas/Account/Profile");
    }
  }, [navigate, user]);

  const signIn = async () => {
    try {
      const user = await client.signin(credentials);
      dispatch(setUser(user));
    } catch (e) {
      console.log("Wrong credentials.");
    }
  };

  const handleSignup = function () {
    navigate("/Kanbas/Account/Signup");
  };

  return (
    <div>
      <h1 className={"signin-h1"}>Signin</h1>
      <div className={"signin-inputs"}>
        <input
          value={credentials.username}
          onChange={(e) =>
            setCredentials({ ...credentials, username: e.target.value })
          }
        />
        <input
          value={credentials.password}
          onChange={(e) =>
            setCredentials({ ...credentials, password: e.target.value })
          }
        />
        <button onClick={signIn}> Sign in</button>
        <button onClick={() => handleSignup()}>Go to Sign up</button>
      </div>
    </div>
  );
}
