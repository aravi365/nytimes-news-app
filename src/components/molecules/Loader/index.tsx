import { CircularProgress, Grid, Typography } from "@mui/material";

interface LoaderProps {
  loaderText?: string;
}

const styles = {
  progress: {
    color: "#333", // black color
    "&.MuiCircularProgress-circle": {
      strokeLinecap: "round",
    },
  },
};

function Loader({ loaderText }: LoaderProps) {
  return (
    <Grid
      direction="column"
      container
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Grid item>
        <CircularProgress size={60} thickness={5} sx={styles.progress} />
      </Grid>
      <Grid style={{ marginTop: "2vh" }} item>
        <Typography variant="body1">{loaderText}</Typography>
      </Grid>
    </Grid>
  );
}

export default Loader;
