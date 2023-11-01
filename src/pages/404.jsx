//HUSK AT SKRIVE KOMMENTARER TIL NÆRMEST ALT – forklaring samt hvad koden gør

// Her er der linket til CSS filen
import '../styles/vic.css'

//import af custom theme
import { customTheme } from '../themes/themes';
import { ThemeProvider, useTheme } from '@mui/material/styles';
import { Box, CssBaseline, Stack, Typography } from "@mui/material";


import { MainBtn } from '../components/cards';

import placeholder from "../assets/pictures/placeholder.jpeg"


//Knap til forside
//Logo
//Tekst der siger at siden ikke eksisterer
//Evt. Adresse, tlf eller konktakt support "Support er taget på ferie med Artic Artie, kom tilbage om 1 uge"
export default function Error() {
    const outerTheme = useTheme();
    return (
        <ThemeProvider theme={customTheme(outerTheme)}>
            <CssBaseline enableColorScheme />

            <Stack direction="column" spacing={8}>
                <img src={placeholder} alt="" />

                <Box textAlign="center">
                    <Typography variant='h1'>404</Typography>
                    <Typography variant="h4" lineHeight="1">Unfortunately this page doesn&apos;t exist yet <p>&#128546;</p></Typography>
                    <MainBtn name="Return to homepage" page="/"/>
                    
                </Box>
                

            </Stack>


        </ThemeProvider>
    );
}