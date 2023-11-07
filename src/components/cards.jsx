//{Kodet af: Victoria}


import { Button, Card, CardActionArea, CardContent, CardMedia, Stack, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";





//Kort komponent som genbruges på flere sider vha props
export function QuickTools(props) {
    return (
        <Stack direction="row">
            <Card elevation={4}>
                <Button variant='filled'

                >
                    <CardContent
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "space-evenly",

                            width: 80,
                            height: 90,
                            fontWeight: 600,
                            lineHeight: 1.15,
                        }}
                    >
                        {props.icon}
                        {props.name}

                    </CardContent>

                </Button>
            </Card>
        </Stack>

    )

}

export function ScrollCards(props) {
    return (

        <Stack direction="row">
            <Card elevation={4} >

                <CardActionArea>
                    <CardMedia className="dealsPic"
                        component="img"
                        image={props.image}
                        sx={{
                            height: 100,
                        }}
                    >
                    </CardMedia>

                    <CardContent
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "space-evenly",
                            textAlign: "center",

                            width: 240,
                            height: "100%",
                            p: 2,

                        }}
                    >

                        <Typography gutterBottom variant="body2" component="div" lineHeight="1.15">
                            {props.name}
                        </Typography>
                    </CardContent>

                </CardActionArea>
            </Card>
        </Stack>

    )
}

export function AutoScroll(props) {
    return (
//for-loop ?
   
            <CardActionArea>

            <Card elevation={4}
                sx={{
                    height: "100%",
                }}
            >
                <CardContent>
                    <CardMedia
                        component="img"
                        image={props.image}
                        sx={{
                            height: 200,
                            minWidth: 300,
                            borderRadius: "4%",
                            marginBottom: 1.5

                        }}
                    ></CardMedia>
                    <Typography variant="body1">{props.title}</Typography>
                    <Typography variant="body2">{props.description}</Typography>
                </CardContent>
            </Card>
            </CardActionArea>

    )
}



export function MainBtn(props) {
    return (
        <Button variant="filled"
            component={NavLink}
            to={props.page}

            sx={{
                color: customTheme => customTheme.palette.background.paper,
                backgroundColor: customTheme => customTheme.palette.secondary.main,
                width: "80%",

            }}
        >
            <Typography variant="button">{props.name}</Typography>
        </Button>


    )
}

