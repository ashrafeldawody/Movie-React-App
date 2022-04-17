import { Card, CardMedia, CardContent, Typography,CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';
export default function MovieCard(props){
    const movie = props.movie;
    return (
        <Card sx={{  m: 1 }} elevation={4}>
        <CardActionArea >
        <Link to={"/movie/" + movie.id} style={{ textDecoration: 'none', color: 'white' }}>
        <CardMedia
          component="img"
          height="300"
          image={"https://image.tmdb.org/t/p/w500/" + (movie.poster_path || movie.backdrop_path)}
          alt={movie.name}
        />
        <CardContent>
          <Typography gutterBottom variant="body1" component="div">
            {movie.name || movie.title}
          </Typography>

        </CardContent>
        </Link>
        </CardActionArea>
      </Card>
    )
}