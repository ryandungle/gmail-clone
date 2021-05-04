import { IconButton } from "@material-ui/core";
import {
  ArrowBack as ArrowBackIcon,
  MoveToInbox as MoveToInboxIcon,
  Error as ErrorIcon,
  Delete as DeleteIcon,
  Email as EmailIcon,
  WatchLater as WatchLaterIcon,
  CheckCircle as CheckCircleIcon,
  LabelImportant as LabelImportantIcon,
  MoreVert as MoreVertIcon,
  UnfoldMore as UnfoldMoreIcon,
  Print as PrintIcon,
  ExitToApp as ExitToAppIcon,
  ExitToApp,
} from "@material-ui/icons";
import React, { useState } from "react";
import { useDocumentData } from "react-firebase-hooks/firestore";
import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { selectOpenMail } from "../../features/mail/mailSlice";
import { db } from "../../utils/firebase";
import {
  MailTools,
  MailContainer,
  MailToolsLeft,
  MailToolsRight,
  MailBody,
  MailBodyHeader,
  MailMessage,
  MailTime,
  MailTitle,
} from "./Mail.styles";

export const Mail = () => {
  const history = useHistory();
  const selectedMail = useSelector(selectOpenMail);

  if (!selectedMail) {
    return <p> Loading...</p>;
  }
  return (
    <MailContainer>
      <MailTools>
        <MailToolsLeft>
          <IconButton onClick={() => history.push("/")}>
            <ArrowBackIcon />
          </IconButton>
          <IconButton>
            <MoveToInboxIcon />
          </IconButton>
          <IconButton>
            <ErrorIcon />
          </IconButton>
          <IconButton>
            <DeleteIcon />
          </IconButton>
          <IconButton>
            <EmailIcon />
          </IconButton>
          <IconButton>
            <WatchLaterIcon />
          </IconButton>
          <IconButton>
            <CheckCircleIcon />
          </IconButton>
          <IconButton>
            <LabelImportantIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </MailToolsLeft>
        <MailToolsRight>
          <IconButton>
            <UnfoldMoreIcon />
          </IconButton>
          <IconButton>
            <PrintIcon />
          </IconButton>
          <IconButton>
            <ExitToApp />
          </IconButton>
        </MailToolsRight>
      </MailTools>
      <MailBody>
        <MailBodyHeader>
          <h2>{selectedMail.subject}</h2>
          <LabelImportantIcon />
          <MailTitle>{selectedMail.title}</MailTitle>
          <MailTime>{selectedMail.time}</MailTime>
        </MailBodyHeader>
        <MailMessage>
          <p>{selectedMail.description}</p>
        </MailMessage>
      </MailBody>
    </MailContainer>
  );
};
