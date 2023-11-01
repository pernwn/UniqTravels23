//HUSK AT SKRIVE KOMMENTARER TIL NÆRMEST ALT – forklaring samt hvad koden gør
//kodet af Rina

//import af separat theme file
import { customTheme } from '../themes/themes';
import { useTheme } from '@mui/material/styles';

import { Button, ThemeProvider, Typography, TextField, Box, /*Grid*/ } from "@mui/material";
import { useState } from "react";
//import { Link } from 'react-router-dom';



export default function Login() {
  // Bruger React's 'useTheme' hook til at hente det aktuelle tema
  const outerTheme = useTheme();

  // Opretter to tilstande (states) for email og password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // vi bruger reacts "useState" hook og sætter password og email som en tom string('')
  // vi inkluderer også setPassword og setEmail. Det betyder at senere kan vi opdatere dem ved at skrive 'setPassword(nyværdi)'

  // Opretter en funktion kaldet 'handleLogin', der udføres, når 'Login' knappen klikkes
  const handleLogin = () => {
    if (email === "user@example.com" && password === "password") {
      // Hvis email og password matcher, vises en velkomstbesked
      //alert("welcome!");

      //fører til homepage
      window.location.href = '/'

    } else {
      // Hvis email og password ikke matcher, vises en fejlbesked
      alert("lol noob");

      //TODO: måske felterne kan skifte farve til rød og en 'tooltip' (fra MUI) kan vises og sige at password wrong
    }
  };
  // i denne sætning if (email === 'user@example.com' && password === 'password') starter vi en 'if' sætning for at undersøge om email og password matcher
  return (
    // Anvender det brugerdefinerede tema på komponenten
    <ThemeProvider theme={customTheme(outerTheme)}>
      <Box
        sx={{
          marginTop: 20,
        }}
      >

        <div>
          <Typography variant="h2">Login</Typography>

          {/* Inputfelt for email med en onChange-handler, der opdaterer email-tilstanden */}
          <TextField
            type="email"
            placeholder="Type here..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="outlined-email"
            label="E-mail"
            variant="outlined" />

          {/* Inputfelt for password med en onChange-handler, der opdaterer password-tilstanden */}
          <TextField
            type="password"
            placeholder="Type here..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="outlined-password"
            label="Password"
            variant="outlined" />

          {/* Knappen, der udløser 'handleLogin' funktionen ved klik */}
          <Button variant="contained" type="button" onClick={handleLogin}>Login</Button>

          {/* 
          <Grid container justifyContent="flex-end">
              <Grid item>
                
                <Link href="../pages/signup.jsx" variant="body2">
                  Don&rsquo;t have an account? Sign up
                </Link>
              </Grid>
            </Grid>
*/}
        </div>

      </Box>
    </ThemeProvider>
  );
}
