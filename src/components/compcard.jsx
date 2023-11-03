import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVert from '@mui/icons-material/MoreVert';
import { NavLink } from 'react-router-dom';
import { Stack } from '@mui/material';

export default function ComplexCard(props) {
    //Ved at bruge props kan vi overføre data eller egenskaber fra det, der kalder ComplexCard-komponenten, til ComplexCard-komponenten selv. 
    //Dette gør det muligt at tilpasse det generelle udseende og indhold i hvert kort.
    //Dette betyder at vi kan oprette flere kort med forskellige label, title, subheader, og image, uden at skulle skrive en separat komponent til hvert kort.


    const cardContentStyle = {
        maxHeight: '200px', // Set the max height for the card content
        overflow: 'hidden', // Hide the overflow
        textOverflow: 'ellipsis', // Add ellipsis for the text overflow

    };
    return (
        <Stack /* Card sat i stack for at kunne scroll  */>
        <Card elevation={4} sx={{ width: 300, maxHeight:500 /* Denne ændres på bredde og højde af kort */ }}> 
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: "info" }} aria-label="Destination">
                        {props.label}
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVert />

                    </IconButton>
                }

                title={props.title}
                subheader={props.subheader}
            />

            <CardMedia
                component="img"
                height="150"
                image={props.image}
            >

            </CardMedia>
            <CardContent sx={cardContentStyle}>
                <Typography variant="body2" color="text.secondary" //Jeg vil gerne få den her til at klappe sig lidt sammen så man kun kan se starten af teksten, kigger på det senere
                >
                    {props.body}
                </Typography>

            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
                <NavLink to="/destination" sx={{ fontSize: 35 }}>Read More</NavLink>
            </CardActions>
        </Card>
    </Stack>


    )
}
