import styled from "styled-components";

// export const StyledButton = styled.button`
//   background-color: ${(props) => (props.primary  ? "#e44848" : "transparent")};
//   color: ${(props) => (props.primary ? "#fff" : "#101828")};
//   padding: 16px 40px;
//   border: ${(props) => (props.primary ? "none" : "1px solid #dadde1")};
//   border-radius: 200px;

//   &:hover {
//     background-color: ${(props) => (props.primary ? "#d84343" : "transparent")};
//     border-color: ${(props) => (props.primary ? "none" : "#d84343")};
//   }
// `;

export const StyledButton = styled.button`
  background-color: #e44848;
  color: #fff;
  padding: 16px 40px;
  border: none;
  border-radius: 200px;

  &:hover {
    background-color: #d84343;
  }
`;
