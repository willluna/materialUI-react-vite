import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material";

export default function BluuCard() {
    return(
        <Card
            sx={{
                transition: "0.2s",
                "&:hover":{
                    transform:"scale(1.05)",
                },
            }}
        >
                <CardActionArea>
                <CardMedia
            component="img"
            image="https://via.placeholder.com/1000x200"
            height="200"
            alt="una descripción"
            />
            <CardContent>
                <Typography variant="h5">Card Title</Typography>
                <Typography 
                    component="p" 
                    variant="body2"
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet architecto eos dignissimos adipisci id? Sit minus suscipit itaque harum adipisci unde saepe architecto iure perferendis atque? Vitae suscipit ea officiis.
                </Typography>
            </CardContent>
 
                </CardActionArea>
                    <CardActions>
                <Button variant="contained">Add</Button>
                <Button color="error">Remove</Button>
            </CardActions>
        </Card>
    )
}