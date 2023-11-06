//{Kodet af: Victoria ved brug af MUI library og tilpasset til vores app}

import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';


//import af ikoner fra MUI
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AirplaneTicketOutlinedIcon from '@mui/icons-material/AirplaneTicketOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';



//NavLink bruges som komponent inde i BottomNavigationActions for at henvise til en anden side når man trykker
import { NavLink } from 'react-router-dom';

//importerer useLocation til at få information om den nuværende lokation – denne bruges til at bestemme active state
import { useLocation } from 'react-router-dom';
import { useState } from 'react';





//TODO: skal lige have skrevet kommentarer til ddet her
export default function Nav() {
    const location = useLocation();
    const [value, setValue] = useState(location.pathname);

    //når man trykker på knappen sker en ændring dvs aktiv nav ikon
    const handleChange = (event, newValue) => {
        setValue(newValue, value);

    };



    return (
        <>
            <BottomNavigation
                sx={{ width: "100%", p: "2.5em 0 4em 0", position: 'fixed', bottom: 0, left: 0, right: 0, boxShadow: 3, zIndex: 2 }}
                value={location.pathname} //denne value gør at knappen er aktiv på den side man er på uanset om man har trykket på nav eller tilgår siden på anden måde
                onChange={handleChange}

            >

                <BottomNavigationAction
                    component={NavLink}
                    to='/'
                    label="Home"
                    value="/"
                    icon={<HomeOutlinedIcon sx={{ fontSize: 35 }} />}
                    className={value === '/' ? 'active' : ''}
                />
                <BottomNavigationAction
                    component={NavLink}
                    to='/booking'
                    label="Booking"
                    value="/booking"
                    icon={<AirplaneTicketOutlinedIcon sx={{ fontSize: 35 }} />}
                    className={value === '/' ? 'active' : ''}
                />
                <BottomNavigationAction
                    component={NavLink}
                    to='/map'
                    label="Map"
                    value="/map"
                    icon={<ExploreOutlinedIcon sx={{ fontSize: 35 }} />}
                    className={value === '/' ? 'active' : ''}
                />
                <BottomNavigationAction
                    component={NavLink}
                    to='/planner'
                    label="Community"
                    value="/planner"
                    icon={<PeopleOutlinedIcon sx={{ fontSize: 35 }} />}
                    className={value === '/' ? 'active' : ''}
                />

                <BottomNavigationAction
                    component={NavLink}
                    to='/user'
                    label="User"
                    value="/user"
                    icon={<AccountCircleOutlinedIcon sx={{ fontSize: 35 }} />}
                    className={value === '/' ? 'active' : ''}
                />

            </BottomNavigation>
        </>
    );
}
