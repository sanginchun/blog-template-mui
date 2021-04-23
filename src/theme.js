import { createMuiTheme } from "@material-ui/core/styles";
import teal from "@material-ui/core/colors/teal";

const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          backgroundColor: "#fff",
        },
      },
    },
  },
  palette: {
    primary: {
      main: teal["A700"],
    },
  },

  typography: {
    h5: {
      fontWeight: 500,
    },
  },
});

export default theme;
