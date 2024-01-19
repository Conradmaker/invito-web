import styled, {css} from "styled-components";
export const HeaderSt = styled.header`
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .logo {
    width: 116px;
  }
  .right {
    display: flex;
    align-items: center;
    gap: 64px;
    & > ul {
      gap: 48px;
      display: flex;
      align-items: center;
      li {
        cursor: pointer;
        font-size: 18px;
        font-weight: 400;
        color: ${({theme}) => theme.colors.neutral[800]};
        &:hover {
          font-weight: 500;
          color: ${({theme}) => theme.colors.neutral[900]};
        }
      }
    }
  }
`;
export const DashboardHeaderSt = styled.header<{$pathname: string}>`
  height: 64px;
  display: flex;
  padding: 0px 64px;
  margin: 12px 0px;
  align-items: center;
  justify-content: space-between;
  .left {
    display: flex;
    align-items: center;
    gap: 32px;
    img {
      height: 24px;
    }
  }
  .avatar {
    cursor: pointer;
  }
  transition: all 0.2s ease-in-out;
  ${({$pathname}) => {
    if ($pathname.startsWith("/project")) {
      return css`
        animation: sizeDown 0.4s 0.3s ease-in-out forwards;
      `;
    }
  }}
  @keyframes sizeDown {
    0% {
      padding: 0px 64px;
      margin: 12px 0px;
    }
    100% {
      padding: 0 24px;
      margin: 0px 0px;
      height: 47px;
    }
  }
`;
export const BreadcrumbSt = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 15px;
  color: ${({theme}) => theme.colors.neutral[900]};
  & > p {
    cursor: pointer;
    display: flex;
    align-items: center;
    &:hover {
      color: ${({theme}) => theme.colors.neutral[600]};
    }
  }
`;
