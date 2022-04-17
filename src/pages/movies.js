import { Grid,Paper,Pagination,CircularProgress } from '@mui/material';
import { useEffect, useState } from 'react';
import {axiosInstance} from '../config/api';
import MovieCard from '../components/movieCard';
import { useParams } from "react-router-dom";
export default function Movies() {

  const { page } = useParams();
  let pageID = page || 1;
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(pageID);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axiosInstance.get(`/movie/popular?page=${currentPage}`)
      .then((res) => {
        setMovies(res.data.results)
        setIsLoading(false)
      })
      .catch((error) => console.log(error))
  }, [currentPage])

  const handleChange = (e,value)=>{
    setCurrentPage(value)
  }
  if (isLoading)
  return (
          <CircularProgress sx={{m:25}}/>
  )
else
  return (
    <Paper elevation={3} sx={{p:3}}>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
      >
        {movies.map((movie, index) => (
          <Grid item xs={12}  md={2.2} sm={6} key={index}>
            <MovieCard movie={movie}></MovieCard>
          </Grid>
        ))}
      </Grid>
      <Pagination count={500} onChange={handleChange} page={parseInt(currentPage)} variant="outlined" shape="rounded" />

    </Paper>
  );
}