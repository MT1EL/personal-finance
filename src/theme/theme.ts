// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react";
import "../assets/fonts/static/PublicSans-Bold.ttf";
import "../assets/fonts/static/PublicSans-Regular.ttf";
// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        bg: "beige.100", // Set the default background color
        minHeight: "100vh",
        width: "100%",
      },
      "#root": {
        display: "flex",
        minHeight: "100vh",
        width: "100%",
      },
      "*": {
        boxSizing: "border-box",
        maxW: "100%",
      },
    },
  },
  breakpoints: {
    sm: "30em", // 480px equivalent (small screens)
    md: "48em", // 768px equivalent (medium screens/tablet)
    lg: "62em", // 992px equivalent (large screens)
    xl: "80em", // 1280px equivalent (extra large screens)
  },

  fonts: {
    heading: "Public Sans Bold",
    body: "Public Sans",
  },

  colors: {
    beige: {
      100: "#F8F4F0", // Preserved value
      500: "#98908B", // Preserved value
      700: "#98908B", // Defaulted to 500's value
    },
    grey: {
      100: "#F2F2F2", // Preserved value
      300: "#B3B3B3", // Preserved value
      500: "#696868", // Preserved value
      900: "#201F24", // Preserved value
    },
    secondary: {
      purple: {
        100: "#826CB0", // Preserved value
        300: "#826CB0", // Defaulted to 100's value
        500: "#826CB0", // Defaulted to 100's value
        700: "#826CB0", // Defaulted to 100's value
      },
    },
    green: {
      100: "#277C78", // Defaulted value
      300: "#277C78", // Defaulted value
      500: "#277C78", // Defaulted value
      700: "#277C78", // Defaulted value
    },
    yellow: {
      100: "#F2CDAC", // Defaulted value
      300: "#F2CDAC", // Defaulted value
      500: "#F2CDAC", // Defaulted value
      700: "#F2CDAC", // Defaulted value
    },
    cyan: {
      100: "#82C9D7", // Defaulted value
      300: "#82C9D7", // Defaulted value
      500: "#82C9D7", // Defaulted value
      700: "#82C9D7", // Defaulted value
    },
    navy: {
      100: "#626070", // Defaulted value
      300: "#626070", // Defaulted value
      500: "#626070", // Defaulted value
      700: "#626070", // Defaulted value
    },
    red: {
      100: "#C94736", // Defaulted value
      300: "#C94736", // Defaulted value
      500: "#C94736", // Defaulted value
      700: "#C94736", // Defaulted value
    },
    purple: {
      100: "#AF81BA", // Defaulted value
      300: "#AF81BA", // Defaulted value
      500: "#AF81BA", // Defaulted value
      700: "#AF81BA", // Defaulted value
    },
    turquoise: {
      100: "#597C7C", // Defaulted value
      300: "#597C7C", // Defaulted value
      500: "#597C7C", // Defaulted value
      700: "#597C7C", // Defaulted value
    },
    brown: {
      100: "#93674F", // Defaulted value
      300: "#93674F", // Defaulted value
      500: "#93674F", // Defaulted value
      700: "#93674F", // Defaulted value
    },
    magenta: {
      100: "#934F6F", // Defaulted value
      300: "#934F6F", // Defaulted value
      500: "#934F6F", // Defaulted value
      700: "#934F6F", // Defaulted value
    },
    blue: {
      100: "#3F82B2", // Defaulted value
      300: "#3F82B2", // Defaulted value
      500: "#3F82B2", // Defaulted value
      700: "#3F82B2", // Defaulted value
    },
    navyGrey: {
      100: "#97A0AC", // Defaulted value
      300: "#97A0AC", // Defaulted value
      500: "#97A0AC", // Defaulted value
      700: "#97A0AC", // Defaulted value
    },
    armyGreen: {
      100: "#7F9161", // Defaulted value
      300: "#7F9161", // Defaulted value
      500: "#7F9161", // Defaulted value
      700: "#7F9161", // Defaulted value
    },
    gold: {
      100: "#CAB361", // Defaulted value
      300: "#CAB361", // Defaulted value
      500: "#CAB361", // Defaulted value
      700: "#CAB361", // Defaulted value
    },
    orange: {
      100: "#BE6C49", // Defaulted value
      300: "#BE6C49", // Defaulted value
      500: "#BE6C49", // Defaulted value
      700: "#BE6C49", // Defaulted value
    },
    white: {
      100: "#FFFFFF", // Defaulted value
      300: "#FFFFFF", // Defaulted value
      500: "#FFFFFF", // Defaulted value
      700: "#FFFFFF", // Defaulted value
    },
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

    Input: {
      baseStyle: {
        field: {
          px: 250,
          py: 150,
          minHeight: "fit-content",
          _placeholder: {
            color: "beige.500",
          },
          outline: "none",
        },
      },
      sizes: {},
      variants: {
        filled: {
          field: {
            borderColor: "beige.500", // Corrected the case to "borderColor"
            backgroundColor: "white",

            _hover: {
              backgroundColor: "white",
              borderColor: "beige.500", // Changes border on hover
            },
            _focus: {
              backgroundColor: "white",
              borderColor: "beige.500", // Changes border on focus
            },
          },
        },
      },
    },
  },
});

export default theme;
