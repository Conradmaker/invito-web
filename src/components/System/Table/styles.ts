import styled from "styled-components";

export const ReactTableSt = styled.table`
  width: 100%;
  border-collapse: separate !important;
  border-spacing: 0;
  thead {
    tr {
      font-weight: 400;
      color: ${({theme}) => theme.colors.neutral[700]};
      background-color: ${({theme}) => theme.colors.neutral[100]};
    }
    th:first-child {
      border-left-width: 1px;
      border-top-left-radius: 8px;
      border-bottom-left-radius: 8px;
      padding-left: 20px;
      text-align: start;
    }
    th:last-child {
      border-right-width: 1px;
      border-top-right-radius: 8px;
      border-bottom-right-radius: 8px;
      padding: 6px;
      padding-right: 20px;
      text-align: end;
    }
    th {
      border-top-width: 1px;
      border-bottom-width: 1px;
      text-align: start;
      font-weight: 400;
      font-size: 13px;
      padding: 8px;
      text-align: center;
    }
  }
  tbody {
    margin-top: 12px;
    tr {
      font-weight: 400;
      /* color: ${({theme}) => theme.colors.neutral[700]}; */

      td {
        border-bottom: 1px solid ${({theme}) => theme.colors.neutral[100]};
        text-align: center;
        padding: 16px 0;
        /* text-align: center; */
      }
      td:first-child {
        text-align: start;
        padding-left: 20px;
      }
      td:last-child {
        text-align: end;
        padding-right: 20px;
      }
      &:last-child td {
        border-bottom: none;
      }
    }
  }
`;
