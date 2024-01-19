import styled from "styled-components";

export const TabSt = styled.ul<{$py: number}>`
  padding: 0 ${({$py}) => $py}px;
  display: flex;
  border-bottom: 1px solid ${({theme}) => theme.colors.neutral[200]};
  align-items: center;

  li {
    margin: 0px 8px;
    padding: 3px 0px;
    transform: translateY(1px);
    &.active {
      border-bottom: 1px solid ${({theme}) => theme.colors.primary[500]};
      a,
      span {
        color: ${({theme}) => theme.colors.primary[400]};
      }
    }
    &:not(.active) a:hover,
    &:not(.active) span:hover {
      color: ${({theme}) => theme.colors.neutral[1000]};
    }
    a,
    span {
      padding: 6px 18px;
      border-radius: 4px;
      width: 100%;
      height: 100%;
      display: block;
      font-size: 16px;
      cursor: pointer;
      color: ${({theme}) => theme.colors.neutral[800]};
      &:hover {
        background-color: ${({theme}) => theme.colors.neutral[100]};
      }
    }
  }
`;
