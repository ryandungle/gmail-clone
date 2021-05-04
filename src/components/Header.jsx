import React from "react";
import {
  HeaderContainer,
  HeaderLeft,
  HeaderMiddle,
  HeaderRight,
} from "./Header.styles";
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  ArrowDropDown as ArrowDropDownIcon,
  Apps as AppsIcon,
  Notifications as NotificationsIcon,
} from "@material-ui/icons";
import { Avatar, IconButton } from "@material-ui/core";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../features/user/userSlice";
import { auth } from "../utils/firebase";

export const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(logout());
    });
  };
  return (
    <HeaderContainer>
      <HeaderLeft>
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img src="https://www.iphonehacks.com/wp-content/uploads/2020/06/Gmail-Icon.jpg" />
      </HeaderLeft>
      <HeaderMiddle>
        <SearchIcon />
        <input placeholder="Search email" type="text" />
        <ArrowDropDownIcon />
      </HeaderMiddle>
      <HeaderRight>
        <IconButton>
          <AppsIcon />
        </IconButton>
        <NotifyIcon />
        <Avatar src={user?.photoUrl} onClick={signOut} />
      </HeaderRight>
    </HeaderContainer>
  );
};

const NotifyIcon = styled(NotificationsIcon)`
  margin-right: 0.8rem;
`;
