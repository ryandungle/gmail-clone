import { Checkbox, IconButton } from "@material-ui/core";
import {
  ArrowDropDown as ArrowDropDownIcon,
  Redo as RedoIcon,
  MoreVert as MoreVertIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  KeyboardHide as KeyboardHideIcon,
  Settings as SettingsIcon,
  Inbox as InboxIcon,
  People as PeopleIcon,
  LocalOffer as LocalOfferIcon,
  StarBorderOutlined as StarBorderOutlinedIcon,
  LabelImportantOutlined as LabelImportantOutlinedIcon,
} from "@material-ui/icons";
import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import {
  EmailListContainer,
  EmailListSettings,
  EmailListSettingsLeft,
  EmailListSettingsRight,
  EmailListSections,
  EmailListMain,
  EmailRowContainer,
  EmailRowOptions,
  EmailRowTitle,
  EmailRowMessage,
  EmailRowTime,
} from "./EmailList.styles";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { db } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { selectMail } from "../features/mail/mailSlice";

const Section = ({ Icon, Title, color, selected }) => {
  return (
    <SectionContainer color={color} selected={selected}>
      <Icon />
      <h4>{Title}</h4>
    </SectionContainer>
  );
};

const SectionContainer = styled.div`
  display: flex;
  align-items: center;
  min-width: 10rem;
  cursor: pointer;
  padding: 1rem;
  color: grey;
  border-width: 0;
  border-bottom: ${(props) => props.selected && `3px solid ${props.color}`};
  color: ${(props) => props.selected && props.color};
  background-color: ${(props) => props.selected && "whitesmoke"};
  :hover {
    background-color: whitesmoke;
    border-bottom: ${(props) => `3px solid ${props.color}`};
  }
  > h4 {
    font-size: 1rem;
    margin-left: 0.5rem;
  }
`;

export const EmailList = () => {
  const [emails, loading, error] = useCollectionData(
    db.collection("emails").orderBy("sentDate", "desc"),
    {
      idField: "id",
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  return (
    <EmailListContainer>
      <EmailListSettings>
        <EmailListSettingsLeft>
          <Checkbox />
          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>
          <IconButton>
            <RedoIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </EmailListSettingsLeft>
        <EmailListSettingsRight>
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
          <IconButton>
            <KeyboardHideIcon />
          </IconButton>
          <IconButton>
            <SettingsIcon />
          </IconButton>
        </EmailListSettingsRight>
      </EmailListSettings>
      <EmailListSections>
        <Section Icon={InboxIcon} Title="Primary" color="red" selected />
        <Section Icon={PeopleIcon} Title="Social" color="#1A73E8" />
        <Section Icon={LocalOfferIcon} Title="Promotions" color="green" />
      </EmailListSections>
      <EmailListMain>
        {emails?.map((email) => (
          <EmailRow
            id={email.id}
            title={email.to}
            subject={email.subject}
            description={email.message}
            time={email.sentDate?.toDate().toUTCString()}
          />
        ))}
        <EmailRow
          id="test"
          title="lee@gmail.com"
          subject="Hello"
          description="it's working"
          time="10pm"
        />
        <EmailRow
          id="test"
          title="lee@gmail.com"
          subject="Hello"
          description="it's working"
          time="10pm"
        />
        <EmailRow
          id="test"
          title="lee@gmail.com"
          subject="Hello"
          description="it's working"
          time="10pm"
        />
        <EmailRow
          id="test"
          title="lee@gmail.com"
          subject="Hello"
          description="it's working"
          time="10pm"
        />
        <EmailRow
          id="test"
          title="lee@gmail.com"
          subject="Hello"
          description="it's working"
          time="10pm"
        />
        <EmailRow
          id="test"
          title="lee@gmail.com"
          subject="Hello"
          description="it's working"
          time="10pm"
        />
        <EmailRow
          id="test"
          title="lee@gmail.com"
          subject="Hello"
          description="it's working"
          time="10pm"
        />
        <EmailRow
          id="test"
          title="lee@gmail.com"
          subject="Hello"
          description="it's working"
          time="10pm"
        />
        <EmailRow
          id="test"
          title="lee@gmail.com"
          subject="Hello"
          description="it's working"
          time="10pm"
        />
        <EmailRow
          id="test"
          title="lee@gmail.com"
          subject="Hello"
          description="it's working"
          time="10pm"
        />
        <EmailRow
          id="test"
          title="lee@gmail.com"
          subject="Hello"
          description="it's working"
          time="10pm"
        />
        <EmailRow
          id="test"
          title="lee@gmail.com"
          subject="Hello"
          description="it's working"
          time="10pm"
        />
        <EmailRow
          id="test"
          title="lee@gmail.com"
          subject="Hello"
          description="it's working"
          time="10pm"
        />
        <EmailRow
          id="test"
          title="lee@gmail.com"
          subject="Hello"
          description="it's working"
          time="10pm"
        />
      </EmailListMain>
    </EmailListContainer>
  );
};

function EmailRow({ id, title, subject, description, time }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const openMail = () => {
    dispatch(
      selectMail({
        id,
        title,
        subject,
        description,
        time,
      })
    );
    history.push(`/mail`);
  };
  return (
    <EmailRowContainer onClick={openMail}>
      <EmailRowOptions>
        <Checkbox />
        <IconButton>
          <StarBorderOutlinedIcon />
        </IconButton>
        <IconButton>
          <LabelImportantOutlinedIcon />
        </IconButton>
      </EmailRowOptions>
      <EmailRowTitle>{title}</EmailRowTitle>
      <EmailRowMessage>
        <h4>
          {subject} <span>- {description}</span>
        </h4>
      </EmailRowMessage>
      <EmailRowTime>{time}</EmailRowTime>
    </EmailRowContainer>
  );
}
