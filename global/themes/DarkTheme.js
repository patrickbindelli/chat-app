import { indigoDark, slateDark, blackA, redDark } from "@radix-ui/colors";

const DarkTheme = {
  dark: true,
  colors: {
    primary: indigoDark.indigo9,
    secondary: slateDark.slate3,
    background: slateDark.slate1,
    card: slateDark.slate1,
    text: indigoDark.indigo12,
    lowContrastText: indigoDark.indigo11,
    grayText: slateDark.slate11,
    border: slateDark.slate6,
    notification: redDark.red9,
    modal: blackA.blackA6,
  },
};

export default DarkTheme;
