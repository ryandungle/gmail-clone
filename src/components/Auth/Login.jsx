import { Button } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../../features/user/userSlice";
import { auth, GoogleProvider } from "../../utils/firebase";
import { LoginContainer, LoginWrapper } from "./Login.styles";

export default function Login() {
  const dispatch = useDispatch();
  const signIn = () => {
    auth
      .signInWithPopup(GoogleProvider)
      .then(({ user }) => {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
          })
        );
      })
      .catch((err) => alert(err.message));
  };
  return (
    <LoginContainer>
      <LoginWrapper>
        <img
          src="https://logos-world.net/wp-content/uploads/2020/11/Gmail-Logo-2020-present.jpg"
          alt=""
        />
        <Button variant="contained" color="primary" onClick={signIn}>
          Login
        </Button>
      </LoginWrapper>
    </LoginContainer>
  );
}
