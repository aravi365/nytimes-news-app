import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import { NewsItem, Loader } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { fetchNewsHome } from "../../store/actions/homeActions";
import { RootState } from "../../store";

export interface IArticle {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  image: string;
  byline: string;
  abstract: string;
  url: string;
}

const styles = {
  gridContainer: {
    margin: "2px 2px",
  },
  loadingTypography: {
    variant: "body1",
  },
};

function Home() {
  const dispatch = useDispatch();
  const { data: articles, loading } = useSelector(
    (state: RootState) => state.home
  );

  useEffect(() => {
    dispatch(fetchNewsHome());
  }, [dispatch]);

  return (
    <Grid sx={styles.gridContainer} container spacing={2}>
      {loading ? (
        <Loader loaderText="Loading Most Popular news" />
      ) : (
        articles.map((article, index) => (
          <NewsItem
            id={article.id}
            key={index}
            title={article.title}
            description={article.abstract}
            author={article.byline}
            imageUrl={article.thumbnail}
          />
        ))
      )}
    </Grid>
  );
}

export default Home;
