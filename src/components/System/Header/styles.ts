import styled from "styled-components";
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
export const DashboardHeaderSt = styled.header`
  height: 64px;
  display: flex;
  padding: 0 24px;
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
`;
export const BreadcrumbSt = styled.div`
  display: flex;
  align-items: center;
`;
