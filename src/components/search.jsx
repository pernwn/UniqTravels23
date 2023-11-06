//{Kodet af: Victoria}


//import Box from '@mui/material/Box';
//import TextField from '@mui/material/TextField';

//import af separat theme fil
import { customTheme } from '../themes/themes';
import { ThemeProvider, useTheme } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import { /*Divider,*/ Divider, IconButton, InputBase, Paper } from '@mui/material';
//import MenuIcon from '@mui/icons-material/Menu';
//import DirectionsIcon from '@mui/icons-material/Directions';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';


export default function SearchBar() {
    const outerTheme = useTheme();

    
    return (
        <ThemeProvider theme={customTheme(outerTheme)}>

            <Paper
                component="form"
                elevation="14"
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 300, opacity: .9 }}
            >


                <InputBase //tekstfeltet
                    sx={{ ml: 2, flex: 1 }}
                    placeholder="Search dream vacation"
                    inputProps={{ 'label': 'search dream vacation' }}
                />

                <IconButton type="button" sx={{ p: '10px' }} label="search">
                    <SearchIcon />
                </IconButton>

                <Divider sx={{ height: 28, m: 0.2 }} orientation="vertical" />

                <IconButton sx={{ p: '10px' }} label="search filter" /*Denne menu skal laves til filtrerin */>
                    <TuneOutlinedIcon />
                </IconButton>

                {/*
                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />

                <IconButton sx={{ p: '10px', color: customTheme => customTheme.palette.text.primary }} label="directions">
                    <DirectionsIcon />
                </IconButton>*/}
            </Paper>

            <Paper className='search-results'>
                Searchbar results

            </Paper>


        </ThemeProvider>
    )

}

/*
<Box sx={{
    display: 'flex',
    alignItems: 'flex-start',
}}>
    <TextField //DENNE SKAL HAVE INPUT ?? man skal kunne søge ting, evt tag fra firebase

        fullWidth
        id="input-with-icon-textfield"
        label="Your next adventure awaits!"
        placeholder='E.g. "Amazing beaches"'

        InputProps={{
            startAdornment: (
                <InputAdornment position="start">
                    <SearchIcon
                        sx={{ color: customTheme => customTheme.palette.secondary.main }}
                    />
                </InputAdornment>
            ),
        }}
        variant="outlined"
    />
</Box>*/