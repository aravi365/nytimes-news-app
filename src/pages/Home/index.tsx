import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid, Typography } from "@mui/material";
import { NewsItem } from "../../components";

interface IArticle {
  id: string;
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
  const [news, setNews] = useState<IArticle[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  function formattedData(rawData: any[]): IArticle[] {
    return rawData.map((data: any) => ({
      id: data.id,
      title: data.title,
      description: data.abstract,
      thumbnail: data?.media?.[0]?.["media-metadata"]?.[1]?.url,
      image: data?.media?.[2]?.["media-metadata"]?.[2]?.url,
      byline: data.byline,
      abstract: data.abstract,
      url: data.url,
    }));
  }

  useEffect(() => {
    axios
      .get(
        "https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=xGYmH3HNH7nYBBBy77TjcBAskQ8VeJXg"
      )
      .then((response) => {
        const formattedNews = formattedData(response?.data?.results);
        setNews(formattedNews);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <Grid sx={styles.gridContainer} container spacing={2}>
      {isLoading ? (
        <Grid item xs={12}>
          <Typography sx={styles.loadingTypography} component="p">
            Loading...
          </Typography>
        </Grid>
      ) : (
        news.map((article, index) => (
          <NewsItem
            id={article.id}
            key={index}
            title={article.title}
            description={article.abstract}
            author={article.byline}
            imageUrl={article.thumbnail}
            readMoreUrl={article.url}
          />
        ))
      )}
    </Grid>
  );
}

export default Home;
