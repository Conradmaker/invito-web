import styled from "styled-components";
import * as RAccordion from "@radix-ui/react-accordion";

export const AccordionBox = styled(RAccordion.Root)`
  border-radius: 0px;
  width: 100%;
  background-color: #eee;
  .accordion-item {
    overflow: hidden;
    margin-top: 1px;
    &:first-child {
      margin-top: 0;
      /* border-top-left-radius: 4px; */
      /* border-top-right-radius: 4px; */
    }

    &:last-child {
      /* border-bottom-left-radius: 4px; */
      /* border-bottom-right-radius: 4px; */
    }
    &:focus-within {
      position: relative;
      z-index: 1;
      box-shadow: 0 0 0 0px #232323;
    }
  }

  .accordion-header {
    display: flex;
  }

  .accordion-trigger {
    font-family: inherit;
    background-color: transparent;
    padding: 0 20px;
    height: 47px;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 4px;
    font-size: 16px;
    line-height: 1;
    color: ${({theme}) => theme.colors.neutral[900]};
    outline: none;
    background-color: ${({theme}) => theme.colors.neutral[0]};
    cursor: pointer;
    &:hover {
      background-color: ${({theme}) => theme.colors.neutral[0]};
    }
    .accordion-btn {
      margin-left: 8px;
      padding: 4px;
      svg {
        width: 16px;
        height: 16px;
        transition: transform 300ms cubic-bezier(0.16, 1, 0.3, 1);
      }
    }
    &[data-state="open"] > .accordion-btn svg {
      transform: rotate(90deg);
      color: ${({theme}) => theme.colors.neutral[700]};
    }
  }

  .accordion-content-box {
    overflow: hidden;
    background-color: ${({theme}) => theme.colors.neutral[0]};
    animation-duration: 300ms;
    animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
    will-change: transform, opacity, height;
    .accordion-content {
      width: 100%;
    }
    &[data-state="open"] {
      animation: slideDown 100ms cubic-bezier(0.16, 1, 0.3, 1);
      & > .accordion-chevron {
        transform: rotate(90deg);
      }
      .accordion-content {
        animation: slideDown2 400ms cubic-bezier(0.16, 1, 0.3, 1);
      }
    }
    &[data-state="closed"] {
      animation: slideUp 100ms cubic-bezier(0.16, 1, 0.3, 1);
      .accordion-content {
        animation: slideUp2 400ms cubic-bezier(0.16, 1, 0.3, 1);
      }
    }
  }

  @keyframes slideDown {
    from {
      height: 0;
    }
    to {
      height: var(--radix-collapsible-content-height);
    }
  }

  @keyframes slideUp {
    from {
      height: var(--radix-collapsible-content-height);
    }
    to {
      height: 0;
    }
  }
  @keyframes slideDown2 {
    from {
      opacity: 0;
      transform: translateY(-50px);
    }
    to {
      opacity: 1;
      transform: translateY(0px);
    }
  }

  @keyframes slideUp2 {
    from {
      opacity: 1;
      transform: translateY(0px);
    }
    to {
      opacity: 0;
      transform: translateY(-50px);
    }
  }
`;
