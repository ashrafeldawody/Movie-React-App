import { Grid } from "@mui/material";
import CastCard from "./castCard";
export default function Cast(props){
    const cast = props.cast;
    return (
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {cast.map((actor, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
            <CastCard actor={actor}></CastCard>
            </Grid>
        ))}
        </Grid>

    )
}