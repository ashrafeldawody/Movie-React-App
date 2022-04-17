import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { axiosInstance } from '../config/api';
import { Box, Card, CardContent, CardMedia, Rating, Typography, styled, Container, Chip, CircularProgress } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Cast from "../components/cast";
export default function Movie() {
    const { id } = useParams();
    const [movie, setMovie] = useState({});
    const [cast, setCast] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const StyledRating = styled(Rating)({
        '& .MuiRating-iconFilled': {
            color: '#ff6d75',
        },
        '& .MuiRating-iconHover': {
            color: '#ff3d47',
        },
    });
    useEffect(() => {
        axiosInstance.get(`/movie/${id}`)
            .then((res) => {
                setMovie(res.data)
                axiosInstance.get(`/movie/${id}/credits`)
                    .then((res) => {
                        //take only 10 actors with existing profile image
                        setCast(res.data.cast.filter(actor => actor.profile_path !== null).slice(0, 10))
                        setIsLoading(false)
                    })
                    .catch((error) => console.log(error))
            })
            .catch((error) => console.log(error))

    }, [id])
    if (isLoading)
        return (
            <CircularProgress sx={{ m: 25 }} />
        )
    else
        return (
            <Container maxWidth="xl">
                <Card sx={{ display: 'flex', m: 4, p: 4 }} variant="outlined">
                    <CardMedia
                        component="img"
                        sx={{ maxHeight: 600 }}
                        image={"https://image.tmdb.org/t/p/w500/" + (movie.poster_path || movie.backdrop_path)}
                        alt="Live from space album cover"
                    />
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent sx={{ flex: '1 0 auto' }}>
                            <Typography component="div" variant="h5" align="left">
                                {movie.name || movie.title} - ({movie.release_date.substring(0, 4)})
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary" component="div" align="left">
                                <StyledRating
                                    name="customized-color"
                                    defaultValue={2}
                                    getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
                                    value={movie.vote_average / 2 || 0}
                                    precision={0.25}
                                    max={5} readOnly
                                    icon={<FavoriteIcon fontSize="inherit" />}
                                    emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                                />
                            </Typography>
                            <Typography component="div" align="left">

                                {movie.genres.map((genre, index) => (
                                    <Chip variant="outlined" label={genre.name} sx={{ mx: 2 }} color="primary" key={index} size="small" />
                                ))}
                            </Typography>

                            <Typography variant="h4" sx={{ my: 4 }} component="div" align="left">
                                Overview
                            </Typography>
                            <Typography variant="body1" component="div" sx={{ mb: 6 }} align="left">
                                {movie.overview}
                            </Typography>
                            <Typography variant="h4" sx={{ my: 4 }} display="block" component="div" align="left">
                                Cast
                            </Typography>


                        </CardContent>
                        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                            <Cast cast={cast} />
                        </Box>
                    </Box>

                </Card>
            </Container>
        )
}