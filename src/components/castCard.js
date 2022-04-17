import { Card, CardMedia, CardContent, Typography } from '@mui/material';
export default function CastCard(props) {
    const actor = props.actor;
    return (
        <Card sx={{ m: 1 }} elevation={4}>
            <CardMedia
                component="img"
                height="300"
                image={"https://image.tmdb.org/t/p/w500/" + (actor.profile_path)}
                alt={actor.name}
            />
            <CardContent>
                <Typography gutterBottom variant="body1" component="div">
                    {actor.name}
                </Typography>

            </CardContent>
      </Card >
    )
}