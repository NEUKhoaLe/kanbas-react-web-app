import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as client from "./client";
import { UserSignUp } from "./client";
import { useDispatch } from "react-redux";
import { setUser as setUserDispatch } from "./UsersReducer";
export default function Signup() {
  const [error, setError] = useState("");
  const [user, setUser] = useState<UserSignUp>({ username: "", password: "" });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const signup = async () => {
    try {
      const signedInUser = await client.signup(user);
      dispatch(setUserDispatch(signedInUser));
      navigate("/Kanbas/Account/Profile");
    } catch (err: any) {
      setError(err.response.data.message);
    }
  };

  const handleSignin = function () {
    navigate("/Kanbas/Account/Signin");
  };

  return (
    <div>
      <h1>Signup</h1>
      {error && <div>{error}</div>}
      <input
        value={user.username}
        onChange={(e) =>
          setUser({
            ...user,
            username: e.target.value,
          })
        }
      />
      <input
        value={user.password}
        onChange={(e) =>
          setUser({
            ...user,
            password: e.target.value,
          })
        }
      />
      <button onClick={signup}> Signup</button>
      <button onClick={() => handleSignin()}>Go to Sign in</button>
    </div>
  );
}
