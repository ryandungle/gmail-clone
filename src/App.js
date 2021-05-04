import React, { useEffect } from "react";
import "./App.css";
import styled from "styled-components";
import { Header, Sidebar, EmailList } from "./components";
import { Mail } from "./components/Mail/Mail";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import SendMail from "./components/SendMail/SendMail";
import { selectSendMessageIsOpen } from "./features/mail/mailSlice";
import { useDispatch, useSelector } from "react-redux";
import { login, selectUser } from "./features/user/userSlice";
import Login from "./components/Auth/Login";
import { auth } from "./utils/firebase";

function App() {
  const dispatch = useDispatch();
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
          })
        );
      }
    });
  }, []);
  return (
    <Router>
      {!user ? (
        <Login />
      ) : (
        <AppContainer>
          <Header />
          <AppBody>
            <Sidebar />
            <Switch>
              <Route path="/mail">
                <Mail />
              </Route>
              <Route path="/">
                <EmailList />
              </Route>
            </Switch>
          </AppBody>
          {sendMessageIsOpen && <SendMail />}
        </AppContainer>
      )}
    </Router>
  );
}

export default App;

const AppContainer = styled.div`
  height: 100vh;
`;
const AppBody = styled.div`
  display: flex;
`;
