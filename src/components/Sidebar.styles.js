import styled from "styled-components";

export const SidebarContainer = styled.div`
  flex: 0.3;
  max-width: 300px;
  > Button {
    margin-top: 1rem;
    margin-left: 1rem;
    margin-bottom: 0.5rem;
    text-transform: capitalize;
    color: gray;
    border-radius: 30px;
    box-shadow: 0px 2px 5px -2px rgba(0, 0, 0, 0.75);
  }
`;

export const SidebarOptionContainer = styled.div`
  display: flex;
  align-items: center;
  height: 2.6rem;
  padding: 0 0.8rem;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  cursor: pointer;
  color: #818181;

  > h3 {
    flex: 1;
    margin-left: 0.5em;
    font-size: 14px;
    font-weight: 400;
    font-weight: ${(props) => props.selected && 800};
  }

  > p {
    display: ${(props) => (props.selected ? "inline" : "none")};
    font-weight: ${(props) => props.selected && "800"};
  }

  background-color: ${(props) => props.selected && "#fcecec"};
  color: ${(props) => props.selected && "#c04b37"};

  :hover > h3,
  :hover > p,
  :hover {
    background-color: #fcecec;
    color: #c04b37;
    font-weight: 800;
  }

  :hover > p {
    display: inline;
  }
`;

export const SidebarFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
