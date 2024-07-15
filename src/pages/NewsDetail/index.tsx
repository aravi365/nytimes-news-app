import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { findNewsById } from "../../utils/dataUtils";
import {
  Container,
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import { RootState } from "../../store";

const styles = {
  container: {
    flex: 1,
    m: "1",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
  },
};

const NewsDetail = () => {
  const { id } = useParams();
  const { data: articles } = useSelector((state: RootState) => state.home);
  //find the newsobject with id
  const newsItem = findNewsById(Number(id), articles);

  if (!newsItem) {
    return <Typography variant="h5">News not found</Typography>;
  }

  return (
    <Container sx={styles.container} maxWidth="md">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Card>
            <CardMedia
              component="img"
              height="600"
              width="100"
              image={newsItem.image}
            />
            <CardContent>
              <Typography gutterBottom variant="h2" component="h2">
                {newsItem.title}
              </Typography>
              <Typography gutterBottom variant="body1" color="textSecondary">
                {newsItem.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button href={newsItem.url} size="medium" color="primary">
                Read more
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2">{newsItem.byline}</Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default NewsDetail;
