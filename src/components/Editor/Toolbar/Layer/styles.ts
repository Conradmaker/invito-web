import ContentEditable from "react-contenteditable";
import styled, {css} from "styled-components";

export const LayerContainer = styled.div`
  height: 100%;
`;
type LayerNodeStyleProps = {
  $expanded: boolean;
  $hasCanvases: boolean;
};
export const LayerNodeSt = styled.div<LayerNodeStyleProps>`
  display: block;
  padding-bottom: ${({$expanded, $hasCanvases}) => ($hasCanvases && $expanded ? 5 : 0)}px;
`;

type LayerItemStyleProps = {
  $depth: number;
  $selected: boolean;
  $isHidden: boolean;
  $expanded: boolean;
};
export const LayerItemSt = styled.div<LayerItemStyleProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1px 6px;
  padding-left: ${({$depth}) => 6 + $depth * 18}px;
  margin: 3px 16px;
  border-radius: 4px;
  transition: all 0.15s ease;
  background: ${({$selected, theme}) =>
    $selected ? theme.colors.primary[100] : "transparent"};
  color: ${({$selected, theme}) => ($selected ? theme.colors.primary[300] : "inherit")};
  opacity: ${({$isHidden}) => ($isHidden ? 0.28 : 1)};

  &:hover {
    background: ${({theme, $selected}) =>
      $selected ? theme.colors.primary[100] : theme.colors.neutral[100]};
    color: ${({$selected, theme}) => ($selected ? theme.colors.primary[400] : "inherit")};
  }
  .inner {
    flex: 1;
    & > div {
      padding: 2px 0px;
      flex: 1;
      display: flex;
      margin-left: ${({$depth}) => $depth * 2}px;
      align-items: center;
      p.layer-name {
        flex: 1;
        font-size: 13px;
        h2 {
          padding: 2px 2px;
          &[contenteditable="true"] {
            color: #000;
            border: none;
            cursor: text;
            outline: none;
            box-shadow: 0px 0px 0px 1px ${({theme}) => theme.colors.primary[400]} inset;
          }
        }
      }
    }
  }
  .icon {
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
  }
  .hide {
    width: 24px;
    height: 24px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.25s ease;
    font-size: 12px;

    &:hover {
      background-color: ${({theme}) => theme.colors.neutral[200]};
    }
    position: relative;
    transition: 0.25s cubic-bezier(0.19, 1, 0.22, 1);
    cursor: pointer;
    opacity: 0;
    svg {
      opacity: 0.7;
    }
    ${({$isHidden}) => css`
      opacity: ${$isHidden ? 1 : 0};
    `}
  }
  &:hover {
    .hide {
      opacity: 1;
    }
  }

  .expand {
    width: 24px;
    height: 24px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.25s ease;
    cursor: pointer;
    font-size: 12px;
    &:hover {
      background-color: ${({theme}) => theme.colors.neutral[200]};
    }
    svg {
      transition: 0.25s ease;
      ${({$expanded}) => css`
        transform: rotate(${$expanded ? 90 : 0}deg);
      `}
    }
  }
`;

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
