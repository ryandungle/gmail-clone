import styled from "styled-components";

export const SendMailContainer = styled.div`
  position: fixed;
  bottom: 0px;
  right: 0px;
  background-color: #404040;
  width: 100%;
  height: 60%;
  max-width: 500px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  display: flex;
  flex-direction: column;
  border: 1px solid whitesmoke;
  box-shadow: 0px 5px 7px 8px rgba(0, 0, 0, 0.24);
  > form {
    display: flex;
    flex: 1;
    flex-direction: column;
  }
  > form > input {
    height: 1.5rem;
    padding: 1rem;
    border: none;
    border-bottom: 1px solid whitesmoke;
    outline: none;
  }
`;
export const SendMailHeader = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: gray;
  > h3 {
    color: whitesmoke;
    font-size: 1rem;
  }
`;
export const SendMailOptions = styled.div`
  > Button {
    margin: 1rem;
  }
`;

export const InputMessage = styled.input`
  flex: 1;
`;

export const SendmailError = styled.p`
  background-color: white;
  color: red;
  text-align: right;
  padding: 1rem;
`;
