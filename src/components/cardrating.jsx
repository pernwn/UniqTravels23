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
import { Rating } from '@mui/material';

export default function ComplexCardRating(props) {
    const [value] = React.useState<number | null>(4.5);
return(
    <Card>
        <CardHeader
        avatar={ 
            <Avatar sx={{bgcolor: "info"}} aria-label="Destination">
                {props.label} 
            </Avatar>
        }
        action={
            <IconButton aria-label="settings">
                <MoreVert />

            </IconButton>
        }
        >
                    {props.title}
                    {props.subheader}
        </CardHeader>
        <CardMedia
          component="img"
          height="200"
          image={props.image} 
        >
             
        </CardMedia>
        <CardContent>
            <Typography variant="body2" color="text.secondary" //Jeg vil gerne få den her til at klappe sig lidt sammen så man kun kan se starten af teksten, kigger på det senere
            > 
               {props.body}
            </Typography>

        </CardContent>
        <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                <FavoriteIcon />
                </IconButton>
                <Rating name="read-only" value={props.value} readOnly />
        </CardActions>
    </Card>


)
}
