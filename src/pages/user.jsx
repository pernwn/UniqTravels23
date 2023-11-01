//HUSK AT SKRIVE KOMMENTARER TIL NÆRMEST ALT – forklaring samt hvad koden gør

// Med NavLink gør vi, at produktet bliver en 1 pager
import { NavLink } from "react-router-dom";


import logoplaceholder from '../assets/pictures/logoplaceholder.png'

//import af separat theme fil
import { customTheme } from '../themes/themes';
import { useTheme } from '@mui/material/styles';

import { CssBaseline, ThemeProvider} from '@mui/material';


export default function User(){
    const outerTheme = useTheme();
    return (
        <ThemeProvider theme={customTheme(outerTheme)}>
            <CssBaseline enableColorScheme />
            <section>
                <img src={logoplaceholder} alt="placeholder" style={{ width: "5em" }} />
                <NavLink to='/login'>login</NavLink>

                
            </section>


            
        </ThemeProvider>
    );
}