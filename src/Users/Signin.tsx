import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "./client";
import * as client from "./client";
import "../Kanbas/Account/index.css";
import { setUser } from "./UsersReducer";
import { useDispatch } from "react-redux";
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
  const signIn = async () => {
    const user = await client.signin(credentials);
    dispatch(setUser(user));
    navigate("/Kanbas/Account/Profile");
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
