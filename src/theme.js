import {createMuiTheme, responsiveFontSizes} from "@material-ui/core";

// Colors
const primary = "#3984DD";
const secondary = "#4829B2";
const primaryLight = "#8A8AF4";
const secondaryLight = "#b094ff";
const graySecondaryText = '#6D6D6D'
const black = "#343a40";
const darkBlack = "rgb(36, 40, 44)";
const background = "#f5f5f5";
const warningLight = "rgba(253, 200, 69, .3)";
const warningMain = "rgba(253, 200, 69, .5)";
const warningDark = "rgba(253, 200, 69, .7)";

// Gradient in Home
const startGradient = "rgba(42,27,161,0.7)";
const endGradient = "rgb(19,135,114, 0.7)";

// Colors for Scheduler
const dateCellColorMain = "#6f4dcd";
const dateCellColorLight = "#a088d0";
const dateCellColorDark = "#2e00a2";

// border
const borderWidth = 2;
const borderColor = "rgba(0, 0, 0, 0.13)";

// breakpoints
const xl = 1920;
const lg = 1280;
const md = 960;
const sm = 600;
const xs = 0;

// spacing
const spacing = 8;

const theme = createMuiTheme({
    palette: {
        primary: {main: primary, light: primaryLight},
        secondary: {main: secondary, light: secondaryLight},
        startGradientColor: startGradient,
        endGradientColor: endGradient,
        bgDateCellColor: {
            main: dateCellColorMain,
            light: dateCellColorLight,
            dark: dateCellColorDark
        },
        common: {
            black,
            darkBlack
        },
        warning: {
            light: warningLight,
            main: warningMain,
            dark: warningDark
        },
        // Used to shift a color's luminance by approximately
        // two indexes within its tonal palette.
        // E.g., shift from Red 500 to Red 300 or Red 700.
        tonalOffset: 0.2,
        background: {
            default: background
        },
        spacing
    },
    breakpoints: {
        // Define custom breakpoint values.
        // These will apply to Material-UI components that use responsive
        // breakpoints, such as `Grid` and `Hidden`. You can also use the
        // theme breakpoint functions `up`, `down`, and `between` to create
        // media queries for these breakpoints
        values: {
            xl,
            lg,
            md,
            sm,
            xs
        }
    },
    border: {
        borderColor: borderColor,
        borderWidth: borderWidth
    },
    overrides: {
        MuiTypography: {
            h6: {
                fontFamily: "'Montserrat'",
            },
            h5: {
                fontFamily: "'Montserrat'",
            }
        },
        MuiExpansionPanel: {
            root: {
                position: "static"
            }
        },
        MuiTableCell: {
            root: {
                paddingLeft: spacing * 2,
                paddingRight: spacing * 2,
                borderBottom: `${borderWidth}px solid ${borderColor}`,
                [`@media (max-width:  ${sm}px)`]: {
                    paddingLeft: spacing,
                    paddingRight: spacing
                }
            }
        },
        MuiDivider: {
            root: {
                backgroundColor: borderColor,
                height: borderWidth
            }
        },
        MuiPrivateNotchedOutline: {
            root: {
                borderWidth: borderWidth
            }
        },
        MuiListItem: {
            divider: {
                borderBottom: `${borderWidth}px solid ${borderColor}`
            }
        },
        MuiDialog: {
            paper: {
                width: "100%",
                maxWidth: 430,
                marginLeft: spacing,
                marginRight: spacing
            }
        },
        MuiTooltip: {
            tooltip: {
                backgroundColor: darkBlack
            }
        },
        MuiExpansionPanelDetails: {
            root: {
                [`@media (max-width:  ${sm}px)`]: {
                    paddingLeft: spacing,
                    paddingRight: spacing
                }
            }
        }
    },
    typography: {
        fontFamily: "'Montserrat'",
        useNextVariants: true
    }
});

export default responsiveFontSizes(theme);
