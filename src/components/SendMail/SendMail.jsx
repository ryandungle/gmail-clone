import { Button, IconButton } from "@material-ui/core";
import { Close as CloseIcon } from "@material-ui/icons";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { useDispatch } from "react-redux";
import {
  InputMessage,
  SendMailContainer,
  SendmailError,
  SendMailHeader,
  SendMailOptions,
} from "./SendMail.styles";
import { closeSendMessage } from "../../features/mail/mailSlice";
import { db, getCurrentTimestamp } from "../../utils/firebase";

export default function SendMail() {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (formData) => {
    db.collection("emails").add({
      to: formData.To,
      subject: formData.Subject,
      message: formData.Message,
      sentDate: getCurrentTimestamp(),
    });
    dispatch(closeSendMessage());
  };

  return (
    <SendMailContainer>
      <SendMailHeader>
        <h3>New Message</h3>

        <CloseIcon onClick={() => dispatch(closeSendMessage())} />
      </SendMailHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="To"
          type="text"
          {...register("To", { required: true })}
        />
        {errors.To && <SendmailError>To is Required!</SendmailError>}
        <input
          placeholder="Subject"
          type="text"
          {...register("Subject", { required: true })}
        />
        {errors.Subject && <SendmailError>Subject is Required!</SendmailError>}
        <InputMessage
          placeholder="Message..."
          type="text"
          {...register("Message", { required: true })}
        />
        {errors.Message && <SendmailError>Message is Required!</SendmailError>}
        <SendMailOptions>
          <Button type="submit" variant="contained" color="primary">
            Send
          </Button>
        </SendMailOptions>
      </form>
    </SendMailContainer>
  );
}
