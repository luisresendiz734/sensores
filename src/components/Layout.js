import { useUser } from "../context/UserContext";

import {
  AppBar,
  Avatar,
  Button,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  name: {
    marginRight: theme.spacing(2),
  },
}));

const Layout = ({ children }) => {
  const classes = useStyles();
  const { user, login, logout } = useUser();
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Sensores
          </Typography>
          {user ? (
            <>
              <Typography className={classes.name} variant="subtitle1">
                {user.displayName}
              </Typography>
              <Avatar
                src={user.photoURL}
                alt={user.displayName}
                onClick={logout}
              />
            </>
          ) : (
            <Button color="inherit" onClick={login}>
              login
            </Button>
          )}
        </Toolbar>
      </AppBar>
      <main style={{ width: "90%", margin: "2rem auto" }}>{children}</main>
    </>
  );
};

export default Layout;
