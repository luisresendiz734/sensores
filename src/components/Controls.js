import {
  FormControlLabel,
  makeStyles,
  Paper,
  Switch,
  Typography,
} from "@material-ui/core";
import { useUser } from "../context/UserContext";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
  },
}));

const Controls = () => {
  const classes = useStyles();
  const { user } = useUser();
  if (!user) {
    return null;
  }
  return (
    <Paper className={classes.paper}>
      <Typography variant="h3">Controls</Typography>
      <Typography>
        Estos controles se muestran unicamente cuando el usuario ha iniciado
        sesion
      </Typography>
      <FormControlLabel control={<Switch />} label="Motor" />
    </Paper>
  );
};

export default Controls;
