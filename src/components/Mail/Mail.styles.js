import styled from "styled-components";

export const MailContainer = styled.div`
  flex: 1;
  background-color: whitesmoke;
`;
export const MailTools = styled.div`
  background-color: white;
  display: flex;
  justify-content: space-between;
`;
export const MailToolsLeft = styled.div``;
export const MailToolsRight = styled.div``;

export const MailBody = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  background-color: white;
  padding: 1rem;
  height: 100vh;
  box-shadow: 0px 5px 7px 0px rgba(0, 0, 0, 0.24);
`;
export const MailBodyHeader = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid whitesmoke;
  padding-bottom: 1rem;
  position: relative;
  > .MuiSvgIcon-root {
    color: #e8ab02;
  }
  > h2 {
    font-weight: 400;
    margin-right: 1em;
  }
`;
export const MailMessage = styled.div`
  padding: 1em;
  margin-right: 1rem;
  overflow-wrap: break-word;
`;

export const MailTime = styled.p`
  margin-right: 0.5rem;
`;
export const MailTitle = styled.p`
  flex: 1;
`;
