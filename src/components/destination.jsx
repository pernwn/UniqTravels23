import { CssBaseline, ThemeProvider } from "@mui/material"
import { Route, Routes } from "react-router-dom"
import { customTheme } from "../themes/themes"
import SignUp from "../pages/signup"
import { useTheme } from "@emotion/react";

export default function Destination(){
  const outerTheme = useTheme();
return(
<ThemeProvider theme={customTheme(outerTheme)}>
<CssBaseline enableColorScheme />

<Routes>
  <Route path="/signup" element={<SignUp />} />
  </Routes>

</ThemeProvider>

)
}

