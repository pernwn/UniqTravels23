import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreVert from '@mui/icons-material/MoreVert';
import { Rating } from '@mui/material';

export default function ComplexCardRating(props) {

return(
    <Card>
        <CardHeader
        title={props.title}
        subheader={props.subheader}           
        action={
                        <IconButton aria-label="settings">
                            <MoreVert />
                        </IconButton>
                    }                    

       />
        <CardMedia
          component="img"
          height="200"
          image={props.image} 
        >
        </CardMedia>
        <CardContent>
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
