// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react";
import "../assets/fonts/static/PublicSans-Bold.ttf";
import "../assets/fonts/static/PublicSans-Regular.ttf";
// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  fonts: {
    heading: "Public Sans Bold",
    body: "Public Sans",
  },

  colors: {
    beige: {
      100: "#F8F4F0",
      500: "#98908B",
    },
    grey: {
      100: "#F2F2F2",
      300: "#B3B3B3",
      500: "#696868",
      900: "#201F24",
    },
    secondary: {
      purple: "#826CB0",
    },
    green: "#277C78",
    yellow: "#F2CDAC",
    cyan: "#82C9D7",
    navy: "#626070",
    red: "#C94736",
    purple: "#AF81BA",
    Turquoise: "#597C7C",
    brown: "#93674F",
    magenta: "#934F6F",
    blue: "#3F82B2",
    navyGrey: "#97A0AC",
    armyGreen: "#7F9161",
    gold: "#CAB361",
    Orange: "#BE6C49",
    white: "#FFFFFF",
  },

  textStyles: {
    text1: {
      fontFamily: "Public Sans Bold", // Font applied here
      fontSize: "32px",
      lineHeight: "38.4px",
      letterSpacing: "0px",
      fontWeight: "bold",
      color: "grey.900",
    },
    text2: {
      fontFamily: "Public Sans Bold", // Font applied here
      fontSize: "20px",
      lineHeight: "24px",
      letterSpacing: "0px",
      fontWeight: "bold",
      color: "grey.900",
    },
    text3: {
      fontFamily: "Public Sans Bold", // Font applied here
      fontSize: "16px",
      lineHeight: "24px",
      letterSpacing: "0px",
      fontWeight: "bold",
      color: "grey.900",
    },
    text4: {
      fontFamily: "Public Sans",
      fontSize: "14px",
      lineHeight: "21px",
      letterSpacing: "0px",
      fontWeight: "regular",
      color: "grey.900",
    },
    text4Bold: {
      fontFamily: "Public Sans Bold", // Font applied here
      fontSize: "14px",
      lineHeight: "21px",
      letterSpacing: "0px",
      fontWeight: "bold",
      color: "grey.900",
    },
    text5: {
      fontFamily: "Public Sans",
      fontSize: "12px",
      lineHeight: "18px",
      letterSpacing: "0px",
      fontWeight: "regular",
      color: "grey.900",
    },
    text5Bold: {
      fontFamily: "Public Sans Bold", // Font applied here
      fontSize: "12px",
      lineHeight: "18px",
      letterSpacing: "0px",
      fontWeight: "bold",
      color: "grey.900",
    },
  },

  space: {
    50: "4px",
    100: "8px",
    150: "12px",
    200: "16px",
    250: "20px",
    300: "24px",
    400: "32px",
    500: "40px",
  },

  components: {
    Button: {
      baseStyle: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 200,
        padding: 200,
        border: "1px solid #D2D2D2",
        minHeight: "fit-content",
      },
      sizes: {},

      variants: {
        primary: {
          textStyle: "text4Bold",
          backgroundColor: "grey.900",
          color: "white",
          _hover: {
            backgroundColor: "grey.500",
          },
        },
        secondary: {
          textStyle: "text4Bold",
          backgroundColor: "beige.100",
          color: "grey.900",
          borderColor: "transparent",
          _hover: {
            backgroundColor: "white",
            borderColor: "beige.500",
          },
        },
        tertiary: {
          padding: 0,
          border: "none",
          color: "grey.500",
          _hover: {
            color: "grey.900",
          },
        },
        destroy: {
          backgroundColor: "red",
          color: "white",
          border: "none",
          _hover: {
            opacity: 0.8, // Adding a slight white overlay with reduced opacity
          },
        },
      },
    },
  },
});

export default theme;
