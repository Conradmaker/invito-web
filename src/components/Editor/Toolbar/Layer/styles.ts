import ContentEditable from "react-contenteditable";
import styled from "styled-components";

export const LayerNameEditBox = styled(ContentEditable)`
  cursor: text;
  width: 100%;
  white-space: nowrap;
  outline: none;
  font-weight: 400;
  padding: 2px 2px;
  &:focus,
  &:hover {
    box-shadow: 0px 0px 1px 0.5px ${({theme}) => theme.colors.neutral[0]} inset;
  }
`;
