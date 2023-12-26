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
