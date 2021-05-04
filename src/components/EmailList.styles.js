import styled from "styled-components";

export const EmailListContainer = styled.div`
  flex: 1;
  overflow: scroll;
  height: 100vh;
`;
export const EmailListSettings = styled.div`
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 0;
  border-bottom: 1px solid whitesmoke;
  background-color: white;
  z-index: 99;
  padding-right: 0.8rem;
`;
export const EmailListSettingsLeft = styled.div``;
export const EmailListSettingsRight = styled.div``;
export const EmailListSections = styled.div`
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  border-bottom: 1px solid whitesmoke;
  background-color: white;
  z-index: 99;
`;

export const EmailListMain = styled.div``;
export const EmailRowContainer = styled.div`
  display: flex;
  align-items: center;
  height: auto;
  border-bottom: 1px solid whitesmoke;
  cursor: pointer;
  :hover {
    border-top: 2px solid whitesmoke;
    box-shadow: 0px 4px 4px -2px rgba(0, 0, 0, 0.24);
  }
`;
export const EmailRowOptions = styled.div`
  display: flex;
  align-items: center;
`;
export const EmailRowTitle = styled.div`
  flex: 0.3;
  font-size: 1em;
  font-weight: bold;
`;
export const EmailRowMessage = styled.div`
  flex: 0.8;
  align-items: center;
  font-size: 1rem;
  > h4 {
    width: 400px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
  > h4 > span {
    font-weight: 400;
    color: gray;
  }
`;
export const EmailRowTime = styled.p`
  padding-right: 1em;
  font-size: 0.8em;
  font-weight: bold;
`;
