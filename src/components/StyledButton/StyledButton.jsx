import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: ${(props) => (props.basic ? "#e44848" : "transparent")};
  color: ${(props) => (props.basic ? "#fff" : "#101828")};
  padding: 16px 40px;
  border: ${(props) => (props.basic ? "none" : "1px solid #dadde1")};
  border-radius: 200px;

  &:hover {
    background-color: ${(props) => (props.basic ? "#d84343" : "transparent")};
    border-color: ${(props) => (props.basic ? "none" : "#d84343")};
  }
`;
