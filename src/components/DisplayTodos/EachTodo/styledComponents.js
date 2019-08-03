import styled from "styled-components";

export const TodoDescription = styled.span`
  text-decoration: ${props => (props.isCompleted ? "line-through" : "")};
`;
