import { Button, IconButton } from "@material-ui/core";
import React from "react";
import {
  SidebarContainer,
  SidebarOptionContainer,
  SidebarFooter,
} from "./Sidebar.styles";
import {
  Add as AddIcon,
  Inbox as InboxIcon,
  Star as StarIcon,
  AccessTime as AccessTimeIcon,
  LabelImportant as LabelImportantIcon,
  NearMe as NearMeIcon,
  Note as NoteIcon,
  ExpandMore as ExpandMoreIcon,
  Person as PersonIcon,
  Duo as DuoIcon,
  Phone as PhoneIcon,
} from "@material-ui/icons";
import { useDispatch } from "react-redux";
import { openSendMessage } from "../features/mail/mailSlice";

const SidebarOption = ({ Icon, Title, number, selected }) => {
  return (
    <SidebarOptionContainer selected={selected}>
      <Icon />
      <h3>{Title}</h3>
      <p>{number}</p>
    </SidebarOptionContainer>
  );
};

export const Sidebar = () => {
  const dispatch = useDispatch();
  function openComposeBox() {
    dispatch(openSendMessage());
  }
  return (
    <SidebarContainer>
      <Button onClick={openComposeBox} startIcon={<AddIcon fontSize="large" />}>
        Compose
      </Button>
      <SidebarOption Icon={InboxIcon} Title="Inbox" number={54} selected />
      <SidebarOption Icon={StarIcon} Title="Starred" number={54} />
      <SidebarOption Icon={AccessTimeIcon} Title="Snoozed" number={54} />
      <SidebarOption Icon={LabelImportantIcon} Title="Important" number={54} />
      <SidebarOption Icon={NearMeIcon} Title="Sent" number={54} />
      <SidebarOption Icon={NoteIcon} Title="Drafts" number={54} />
      <SidebarOption Icon={ExpandMoreIcon} Title="More" number={54} />
      <SidebarFooter>
        <IconButton>
          <PersonIcon />
        </IconButton>
        <IconButton>
          <DuoIcon />
        </IconButton>
        <IconButton>
          <PhoneIcon />
        </IconButton>
      </SidebarFooter>
    </SidebarContainer>
  );
};
