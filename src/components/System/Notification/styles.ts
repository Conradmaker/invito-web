import styled, {css} from "styled-components";

type ToastStProps = {
  $open: boolean;
};
export const ToastSt = styled.div<ToastStProps>`
  position: fixed;
  bottom: 24px;
  right: 24px;
  min-width: 300px;
  background-color: white;
  border-radius: 6px;
  box-shadow: ${({theme}) => theme.colors.neutral[200]} 0px 4px 12px;
  padding: 16px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .icon {
    padding-right: 16px;
    font-size: 20px;
  }
  .content {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding-right: 24px;
    .title {
      margin-bottom: 5px;
      font-weight: 500;
      color: ${({theme}) => theme.colors.neutral[800]};
      font-size: 15px;
    }
    .desc {
      margin: 0;
      color: ${({theme}) => theme.colors.neutral[600]};
      font-size: 13px;
      line-height: 1.3;
    }
  }
  .action {
    display: flex;
    gap: 4px;
  }
  ${({$open}) =>
    $open
      ? css`
          animation: TSI 250ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
        `
      : css`
          animation: TSO 350ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
        `}

  @keyframes TSI {
    from {
      transform: translateX(calc(100% + 25px));
    }
    to {
      transform: translateX(0);
    }
  }

  @keyframes TSO {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(calc(100% + 25px));
    }
  }
`;
