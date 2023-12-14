const colors = {
  neutral: {
    1000: "#181826",
    900: "#212134",
    800: "#32324D",
    700: "#4A4A6A",
    600: "#666687",
    500: "#8E8EA9",
    400: "#A5A5BA",
    300: "#C0C0CF",
    200: "#DCDCE4",
    100: "#F6F6F9",
    0: "#ffffff",
  },
  primary: {
    500: "#271FE0",
    400: "#4945FF",
    300: "#7B79FF",
    200: "#D9D8FF",
    100: "#F0F0FF",
  },
  secondary: {
    500: "#8E8EA9",
    400: "#A5A5BA",
    300: "#C0C0CF",
    200: "#DCDCE4",
    100: "#F6F6F9",
  },
  danger: {
    500: "#B72B1A",
    400: "#D02B20",
    300: "#EE5E52",
    200: "#F5C0B8",
    100: "#FCECEA",
  },
};
export const theme = {
  colors,
};
export type ColorTheme = typeof theme;
