import styled from "styled-components";

export const CreatorCardBox = styled.div`
  border-radius: 4px;
  padding: 4px;
  display: flex;
  flex-direction: column;
  cursor: move;
  align-items: center;
  gap: 4px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    background-color: ${({theme}) => theme.colors.neutral[100]};
    object-fit: cover;
    border-radius: 8px;
    transition: all 0.25s;
  }
  &:hover {
    img {
      transform: scale(1.25);
      background-color: ${({theme}) => theme.colors.primary[100]};
    }
  }
`;

export const ToolBoxSt = styled.aside`
  width: 0px;
  border-right: 1px solid ${({theme}) => theme.colors.neutral[200]};
  animation: slideRight 0.3s 0.8s forwards;
  @keyframes slideRight {
    0% {
      width: 0px;
      opacity: 0;
    }
    100% {
      width: 288px;
      opacity: 1;
    }
  }
`;
export const ComponentSettingSt = styled.aside`
  width: 0px;
  border-left: 1px solid ${({theme}) => theme.colors.neutral[200]};
  animation: slideLeft 0.3s 0.8s forwards;
  @keyframes slideLeft {
    0% {
      width: 0px;
      opacity: 0;
    }
    100% {
      width: 288px;
      opacity: 1;
    }
  }
`;

export const TopSettingSt = styled.div`
  height: 0px;
  border-bottom: 0px solid ${({theme}) => theme.colors.neutral[200]};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 16px;
  .history {
    display: flex;
    gap: 8px;
    flex: 1;
  }
  .right {
    display: flex;
    gap: 32px;
  }
  animation: SD 0.3s 1.1s forwards;
  overflow: hidden;
  @keyframes SD {
    0% {
      height: 0px;
    }
    100% {
      height: 48px;
      border-bottom-width: 1px;
    }
  }
`;

export const BottomSettingSt = styled.div`
  height: 0px;
  border-top: 0px solid ${({theme}) => theme.colors.neutral[200]};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 16px;
  .left,
  .right {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  animation: SU 0.3s 1.1s forwards;
  overflow: hidden;
  @keyframes SU {
    0% {
      height: 0px;
    }
    100% {
      height: 48px;
      border-top-width: 1px;
    }
  }
`;
