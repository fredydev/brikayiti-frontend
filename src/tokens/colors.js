const fcolors = {
  yellow: "#00a9e0",//"#eca300",
  smoothYellow:"#d9f2fb", //"rgba(225,166,0, 0.1)",
  gray100: '#f5f5f5',
  gray200: '#ece8ef',
  gray300: '#dbd5e0',
  gray400: '#bdb5c3',
  gray500: '#978e9e',
  gray600: '#776d7f',
  gray700: '#685d71',
  gray800: '#463652',
  gray900: '#1e0d2b',
  purple100: '#fcecff',
  purple200: '#f9d6ff',
  purple300: '#eeb2f9',
  purple400: '#eb7dff',
  purple500: '#d73df3',
  purple600: '#c700eb',
  purple700: '#b200d1',
  purple800: '#820099',
  purple900: '#5c016c',
  red100: '#ffe9e9',
  red200: '#fec3c3',
  red300: '#f99e9e',
  red400: '#f36f6f',
  red500: '#f65858',
  red600: '#f63131',
  red700: '#e02121',
  red800: '#b81111',
  red900: '#860505',
  white: '#ffffff',

  primary1: "hsl(21, 91%, 17%)",
  primary2: "hsl(21, 84%, 25%)",
  primary3: "hsl(21, 81%, 29%)",
  primary4: "hsl(21, 77%, 34%)",
  primary5: "hsl(21, 62%, 45%)",
  primary6: "hsl(21, 57%, 50%)",
  primary7: "hsl(21, 65%, 59%)",
  primary8: "hsl(21, 80%, 74%)",
  primary9: "hsl(21, 94%, 87%)",
  primary10:" hsl(21, 100%, 94)",
  /* darkest grey - used for headings */
  grey1: "hsl(209, 61%, 16%)",
  grey2: "hsl(211, 39%, 23%)",
  grey3: "hsl(209, 34%, 30%)",
  grey4: "hsl(209, 28%, 39%)",
  /* grey used for paragraphs */
  grey5: "hsl(210, 22%, 49%)",
  grey6: "hsl(209, 23%, 60%)",
  grey70: "hsl(211, 27%, 70%)",
  grey7: "#D1D1D1",
  grey8: "hsl(210, 31%, 80%)",
  grey9: "hsl(212, 33%, 89%)",
  grey10: "hsl(210, 36%, 96%)",
  redDark: "hsl(360, 67%, 44%)",
  redLight: "hsl(360, 71%, 66%)",
  greenDark: "hsl(125, 67%, 44%)",
  greenLight: "hsl(125, 71%, 66%)",
  black: "#222",
  transition: "all 0.3s linear",
  spacing: "0.1rem",
  radius: "2px",
  lightShadow:" 0 5px 15px rgba(0, 0, 0, 0.1)",
  darkShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
  maxWidth: "1170px",
  fixedWidth: "620px"
};

const colors =  {
  ...fcolors,
  darkest: fcolors.gray900,
  lightest: fcolors.white,
  lightestTransparent: 'rgba(255, 255, 255, 0)',
  lightestAlpha: 'rgba(255, 255, 255, 0.97)',
  primary: fcolors.purple600,
  primaryDark: fcolors.purple700,
  heading: fcolors.gray900,
  text: fcolors.gray700,
  textLight: fcolors.gray600,
  textDark: fcolors.gray800,
  gray: fcolors.gray600,
  grayLightest: fcolors.gray100,
  grayAlpha: 'rgba(214, 209, 230, 0.5)',
  grayAlphaExtra: 'rgba(214, 209, 230, 0.25)',
  warning: fcolors.red700,
  textWarning: fcolors.red900,
  warningBackground: fcolors.red100,
};

export default colors