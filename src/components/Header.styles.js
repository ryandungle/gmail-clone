import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid whitesmoke;
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  > img {
    object-fit: contain;
    height: 80px;
  }
`;

export const HeaderMiddle = styled.div`
  display: flex;
  flex: 0.7;
  align-items: center;
  background-color: whitesmoke;
  padding: 0.8rem;
  > .MuiSvgIcon-root {
    color: gray;
  }
  > input {
    border: none;
    width: 100%;
    padding: 0.5rem;
    font-size: medium;
    outline-width: 0;
    background-color: transparent;
  }
`;
export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  padding-right: 0.8rem;
  > .MuiSvgIcon-root {
    color: gray;
  }
`;
