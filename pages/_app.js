// import "@ericz1803/react-google-calendar/src/index.css";
import "@fullcalendar/common/main.css";
import "@fullcalendar/list/main.css";
import "../styles/globals.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";

// pleaes kindly uncomment for client-side logging
// export function reportWebVitals(metric) {
//   console.log("metrics: ", metric);
// }

const theme = createTheme({
  //   palette: {
  //     primary: {
  //       main: "#73C2FB",
  //       light: "#ffffff",
  //       dark: "#1565c0",
  //     },
  //   },
  typography: {
    button: {
      textTransform: "capitalize",
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
