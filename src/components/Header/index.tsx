import AppBar from "@mui/material/AppBar";
import { IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const styles = {
  appBar: {
    backgroundColor: "#424242",
  },
  iconButton: {
    marginRight: 2,
  },
  typography: {
    color: "#FFFFFF", // white text color
  },
};

function Header() {
  return (
    <div className="Header">
      <AppBar sx={styles.appBar} position="static">
        <Toolbar variant="regular">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={styles.iconButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={styles.typography} component="div">
            NY Times News
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
