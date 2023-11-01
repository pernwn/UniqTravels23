import { Box, Stack, Typography } from "@mui/material";


export default function UserHead() {

    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    marginTop: "4%"
                }}
            >
                <Typography variant="h4" lineHeight={.5}>Sara Marie</Typography>
                <Typography variant="subtitle2">Member since 2013</Typography>
            </Box>


            <Stack direction="row" spacing={8}
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    marginTop:"4%"
                }}
            >

                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-evenly",
                        alignItems: "center"
                    }}
                >
                    <Typography variant="h6" lineHeight={.5}>544 XP</Typography>
                    <Typography variant="subtitle2">Points collected</Typography>
                </Box>

                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-evenly",
                        alignItems: "center"
                    }}
                >
                    <Typography variant="h6" lineHeight={.5}>No. 43</Typography>
                    <Typography variant="subtitle2">Leaderboard</Typography>
                </Box>

            </Stack>


        </>
    )
}