import AppBar from "@mui/material/AppBar";
import { IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
interface HeaderProps {
  title: string;
}

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
  link: { textDecoration: "none" },
};

function Header({ title }: HeaderProps) {
  return (
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
        <Link to={`/`} style={styles.link}>
          <Typography variant="h6" sx={styles.typography}>
            {title}
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
